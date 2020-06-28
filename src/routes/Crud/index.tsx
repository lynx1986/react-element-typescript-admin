import React from 'react';
import { Table, MessageBox, Message, Dialog, Form, Input, Button, Loading, Pagination } from 'element-react';

import styles from './index.module.scss';
import { CrudField } from 'api/types';
import BlankGrid from 'components/BlankGrid';

interface TableColumn {
    label?: string
    prop?: string
    property?: string
    type?: string
    minWidth?: number
    width?: number
    align?: string
    sortable?: boolean
    sortMethod?: () => void
    resizable?: boolean
    formatter?: () => void
    selectable?: boolean
    fixed?: boolean | string
    filterMethod?: () => void
    filters?: Object[]
    render?: (data? :Object, column? :Object, index? :number) => void
}

interface CrudOptions {
    store: any;
    dataSource ?: string;
    dataPage ?: string;
    removeSelected ?: boolean;
    createEnabled ?: boolean;
    operations ?: Array<string>;
    fields ?: Array<CrudField>;
    fetchFunc ?: string;
    fetchFieldsFunc ?: string;
    createFunc ?: string;
    removeFunc ?: string;
    updateFunc ?: string;
}

const CRUD_INIT_OPTIONS = {
    store: '',
    dataSource: 'items',
    dataPage: 'pagination',
    removeSelected: true,
    createEnabled: true,
    fields: [],
    operations: ['edit', 'remove'],
    fetchFunc: 'fetch',
    fetchFieldsFunc: 'fetchFields',
    createFunc: 'create',
    removeFunc: 'remove',
    updateFunc: 'update'
}

const CRUD_METHODS = {
    remove: 'handleRemove',
    edit: 'handleEdit'
}

const CRUD_LABELS = {
    remove: '删除',
    edit: '编辑'
}

interface CrudState {
    editing: boolean;
    fetching: boolean;
    removing: boolean;
    item: any | null;
    isNew: boolean;
    selections: Array<any>
}

class Crud<T, E> extends React.Component<T, CrudState> {

    options: CrudOptions = CRUD_INIT_OPTIONS;

    protected initOptions(options: CrudOptions, t: Function) {
        this.options = Object.assign({}, CRUD_INIT_OPTIONS, options);
    }

    calcColumn(fields: CrudField[]) {

        const columns: TableColumn[] = [];

        const{ operations, removeSelected } = this.options;

        if (removeSelected) {
            columns.push({ type: 'selection' });
        }

        fields.forEach(field => {
            if (field.listVisible) {
                columns!.push({
                    label: field.prop, 
                    prop: field.prop, 
                    width: field.listWidth > 0 ? field.listWidth : undefined
                });
            }
        });
        
        if (operations && operations.length > 0) {
            columns!.push({
                label: '操作', width: 160,
                render: (data: any) => (
                    <div>
                        { operations.map(op => this.renderOperationItem(op, data)) }
                    </div>
                )
            })
        }

        return columns;
    }

    constructor(props: T) {
        super(props);

        this.state = {
            editing: false,
            fetching: false,
            removing: false,
            item: null,
            isNew: false,
            selections: []
        }
    }

    componentDidMount() {
        this.fetchItems();
    }

    render() {

        const { editing, item, fetching, selections } = this.state;
        const { store, dataSource, dataPage, fields, createEnabled, removeSelected } = this.options;
        const data = store[dataSource!];
        const page = store[dataPage!];

        return (
            <div>
                <div className={styles.toolbar}>
                    {
                        removeSelected ?
                            <div className={styles.toolRemoveSelected}>
                                <Button type='danger' disabled={selections.length === 0} >删除选中</Button>
                            </div> :
                            <span className={styles.toolRemoveSelected}/>
                    }
                    {
                        createEnabled ?
                            <div className={styles.toolButtons}>
                                <Button type='primary' onClick={this.handleCreate}>创建</Button> 
                            </div> :
                            <span />
                    }
                </div>
                <Loading className={fetching ? styles.loading : ''} loading={fetching } text='载入中，请稍候'>
                    {
                        fields!.length === 0 ?
                            <BlankGrid /> :
                            <div>
                                <Table
                                    style={{width: '100%', maxHeight: 600, overflowY: 'scroll'}}
                                    columns={this.calcColumn(fields!)}
                                    data={data}
                                    onSelectChange={(selection) => this.handleSelect(selection)}
                                />
                                <div className={styles.pagination}>
                                    <Pagination 
                                        layout='total, sizes, prev, pager, next' total={page.total} 
                                        pageSizes={[10, 20, 30, 40, 50]} pageSize={page.size} currentPage={page.current}
                                        onCurrentChange={value => this.handlePageChange('current', value!)}
                                        onSizeChange={value => this.handlePageChange('size', value!)}
                                    />
                                </div>
                            </div>
                    }
                </Loading>
                <Dialog title='编辑' visible={editing} onCancel={() => this.setState({ editing: false })}>
                    <Dialog.Body>
                        { editing ? this.renderEditForm(item) : <span /> }
                    </Dialog.Body>
                    <Dialog.Footer>
                        <Button onClick={() => this.setState({ editing: false })}>取消</Button>
                        <Button type='primary' onClick={() => this.handleEditSubmit()}>确定</Button>
                    </Dialog.Footer>
                </Dialog>
            </div>
            
        )
    }

    renderEditForm(data: E) {

        const { fields } = this.options;
        const { item, isNew } = this.state;

        return (
            <Form model={item}>
                {
                    fields!.map(field => {
                        if ((isNew && field.createVisible) || (!isNew && field.updateVisible)) {
                            return (
                                <Form.Item key={field.id} label={field.prop} prop={field.prop}>
                                    <Input value={data[field.prop!]} />
                                </Form.Item>
                            )
                        } else {
                            return <span />
                        }
                    })
                }
            </Form>
        );
    }

    renderOperationItem = (operation: string, data: E) => {
        const method = this[CRUD_METHODS[operation]];
        return (
            <span key={operation} className={styles.operation} onClick={() => method(data)}>
                {CRUD_LABELS[operation]}
            </span>
        )
    }

    fetchItems() {
        
        this.setState({ fetching: true });

        const { store, fetchFunc, fetchFieldsFunc } = this.options;
        store[fetchFieldsFunc!]({
            callback: {
                success: (fields: CrudField[]) => {
                    this.options.fields = fields;
                    store[fetchFunc!]({
                        callback: {
                            success: () => this.setState({ fetching: false })
                        }
                    });
                }
            }
        });
    }

    handlePageChange = (name: string, value: number) => {
        this.options.store.updatePage(name, value);
        this.fetchItems();
    }

    handleEditSubmit = () => {

        const { item, isNew } = this.state;
        this.setState({ editing: false, item: null });

        const { store, updateFunc, createFunc } = this.options;
        const submitFunc = isNew ? store[createFunc!] : store[updateFunc!];
        submitFunc({
            params: { item },
            callback: {
                success: () => {
                    Message({
                        message: '提交成功', type: 'success', duration: 600,
                        onClose: () => this.fetchItems()
                    });
                }
            }
        });
    }

    handleSelect = (selections: E[]) => {
        this.setState({ selections });
    }

    handleCreate = () => {
        this.setState({ editing: true, item: {}, isNew: true });
    }

    handleEdit = (data: E) => {
        this.setState({ editing: true, item: data, isNew: false })
    }

    handleRemove = (data: E) => {

        const { store, removeFunc } = this.options;
        MessageBox
            .confirm('确认删除该条记录吗？', '删除', { type: 'warning' })
            .then(() => {
                store[removeFunc!]({
                    params: { item: data },
                    callback: {
                        success: () => this.onRemoveOK(data),
                        fail: () => this.onRemoveNG(data)
                    }
                })
            })
            .catch(() => {});
    }

    onRemoveNG = (data: E) => {
        Message({ message: '删除失败', type: 'error', duration: 600 });
    }

    onRemoveOK = (data: E) => {
        Message({
            message: '删除成功', type: 'success', duration: 600,
            onClose: () => this.fetchItems()
        });
    }
}

export default Crud;