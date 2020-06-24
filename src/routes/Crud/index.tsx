import React from 'react';
import { Table, MessageBox, Message, Dialog, Form, Input, Button, Loading } from 'element-react';

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
}

class Crud<T, E> extends React.Component<T, CrudState> {

    options: CrudOptions = CRUD_INIT_OPTIONS;

    protected initOptions(options: CrudOptions, t: Function) {
        this.options = Object.assign({}, CRUD_INIT_OPTIONS, options);
    }

    calcColumn(fields: CrudField[]) {

        console.log('calcColumn', fields);
        const columns: TableColumn[] = [];

        fields.forEach(field => {
            if (field.listVisible) {
                columns!.push({
                    label: field.prop, 
                    prop: field.prop, 
                    width: field.listWidth > 0 ? field.listWidth : undefined
                });
            }
        });

        const{ operations } = this.options;
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
            item: null
        }
    }

    componentDidMount() {
        this.fetchItems();
    }

    render() {

        const { editing, item, fetching } = this.state;
        const { store, dataSource, fields } = this.options;
        const data = store[dataSource!];

        return (
            <div>
                <Loading className={fetching ? styles.loading : ''} loading={fetching } text='载入中，请稍候'>
                {
                    fields!.length === 0 ?
                        <BlankGrid /> :
                        <Table
                            style={{width: '100%'}}
                            columns={this.calcColumn(fields!)}
                            height={600}
                            data={data}
                        />
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

        return (
            <Form model={this.state.item}>
                {
                    fields!.map(field => {
                        if (field.updateVisible) {
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

    handleEditSubmit = () => {

        const { item } = this.state;
        this.setState({ editing: false, item: null });

        const { store, updateFunc } = this.options;
        store[updateFunc!]({
            params: { item },
            callback: {
                success: () => {
                    Message({
                        message: '编程提交成功', type: 'success', duration: 600,
                        onClose: () => this.fetchItems()
                    });
                }
            }
        })
    }

    handleEdit = (data: E) => {
        this.setState({ editing: true, item: data })
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