import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { inject, observer } from 'mobx-react';
import { Table, Tag, MessageBox, Message } from 'element-react';
import { DemoState } from '../../stores/demo';
import Icon from '../../components/Icon';
import { ArticleStatus, Article } from '../../api/types';

import styles from './index.module.scss';


interface TableDemoProps extends RouteComponentProps, WithTranslation {
  demo: DemoState
}

@inject('demo')
@observer
class TableDemo extends React.Component<TableDemoProps> {

  componentDidMount() {
    this.props.demo.fetchArticles();
  }

  render() {

    const { demo, t } = this.props;

    const COLUMN = [
      { label: t('tableView.table.header.id'), prop: 'id', width: 60 },
      { label: t('tableView.table.header.title'), prop: 'title' },
      { label: t('tableView.table.header.author'), prop: 'author', width: 120 },
      { label: t('tableView.table.header.views'), prop: 'views', width: 120 },
      { 
        label: t('tableView.table.header.status'), prop: 'status', width: 120,
        render: (data:any) => {
          if (data.status === ArticleStatus.draft) {
            return <Tag type='primary'>draft</Tag>
          } else if (data.status === ArticleStatus.published) {
            return <Tag type='success'>published</Tag>
          } else {
            return <Tag type='danger'>deleted</Tag>
          }
        }
      },
      { 
        label: t('tableView.table.header.datetime'), width: 240, 
        render: (data:any) => <Icon size={14} name='clock-circle'>{data.datetime}</Icon>
      },
      {
        label: t('tableView.table.header.operation'), width: 160,
        render: (data:any) => (
          <div>
            <span className={styles.operation} onClick={() => this.handleEdit(data)}>{t('common.operation.edit')}</span>
            <span className={styles.operation} onClick={() => this.handleDelete(data)}>{t('common.operation.delete')}</span>
          </div>
        )
      }
    ];

    return (
      <Table 
        style={{width: '100%'}}
        columns={COLUMN}
        height={600}
        data={demo.articles}
      />
    );
  }

  handleEdit = (data: Article) => {
    this.props.history.push('/example/table/' + data.id);
  }

  handleDelete = (data: Article) => {

    const { t, demo } = this.props;

    MessageBox.confirm(
      t('tableView.message.confirmDelete'), 
      t('common.operation.delete'), 
      { type: 'warning' }
    ).then(() => {
      demo.removeArticle({
        params: { id: data.id },
        callback: {
          success: () => {
            Message({
              message: t('tableView.message.deleteOK'),
              type: 'success',
              duration: 800,
              onClose: () => demo.fetchArticles()
            });
          }
        }
      });
    });
  }
}

export default withRouter(withTranslation()(TableDemo));