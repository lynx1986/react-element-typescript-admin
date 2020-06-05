import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { inject, observer } from 'mobx-react';
import { Table, Tag } from 'element-react';
import { DemoState } from '../../stores/demo';
import Icon from '../../components/Icon';
import { ArticleStatus } from '../../api/types';


interface TableDemoProps extends WithTranslation {
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
}

export default withTranslation()(TableDemo);