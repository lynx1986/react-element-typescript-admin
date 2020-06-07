import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Form, Input, Select, DatePicker, Layout, TimePicker, Switch, Checkbox, Radio, Button, Message } from 'element-react';

import styles from './index.module.scss';

const ZONE_OPTIONS = [
  { label: 'zone1', value: 0 },
  { label: 'zone2', value: 1 },
  { label: 'zone3', value: 2 },
];

interface FormDemoState {
  name: string;
  zone: number;
  date: string;
  time: string;
  delivery: boolean;
  types: string[];
  resource: number;
  detail: string;
}

interface IFormKey {
  form?: Form
}

const DEFAULT_STATE = {
  name: '',
  zone: 0,
  date: '',
  time: '',
  delivery: false,
  types: [],
  resource: 0,
  detail: ''
};

interface FormDemoProps extends WithTranslation {

}

class FormDemo extends React.Component<FormDemoProps, FormDemoState> {

  constructor(props: any) {
    super(props);

    this.state = DEFAULT_STATE;
  }

  rules = {
    name: [
      { required: true, message: this.props.t('formView.message.nameRequired'), trigger: 'blur' }
    ]
  };

  refKey: IFormKey = {};

  onFieldChange = (key: string, value: any) => {
    this.setState(Object.assign({}, this.state, { [key]: value }));
  }

  render() {

    const { name, zone, date, time, delivery, types, resource, detail } = this.state;
    const { t } = this.props;

    return (
      <div>
        <Form ref={(ref: any) => this.refKey.form = ref} model={this.state} rules={this.rules} labelWidth="180">
          <Form.Item label={t('formView.form.name')} prop='name'>
            <Input value={name} autoComplete='off' onChange={v => this.onFieldChange('name', v)} />
          </Form.Item>
          <Form.Item label={t('formView.form.zone')} prop='zone'>
            <Select value={zone} placeholder='Please select a zone'>
              {
                ZONE_OPTIONS.map(opt => 
                  <Select.Option key={opt.value} label={opt.label} value={opt.value} />
                )
              }
            </Select>
          </Form.Item>
          <Form.Item label={t('formView.form.datetime')} >
            <Layout.Col span='11'>
              <Form.Item prop='date' labelWidth='0px'>
                <DatePicker 
                  className={styles.datePicker} value={date}
                  placeholder={t('formView.form.datetime_date_placeholder')} 
                  onChange={v => this.onFieldChange('date', v)} />
              </Form.Item>
            </Layout.Col>
            <Layout.Col span='2'>
              <span className={styles.separator}>-</span>
            </Layout.Col>
            <Layout.Col span='11'>
              <Form.Item prop='time' labelWidth='0px'>
                <TimePicker 
                  className={styles.timePicker} value={time} 
                  placeholder={t('formView.form.datetime_time_placeholder')} 
                  onChange={v => this.onFieldChange('time', v)} />
              </Form.Item>
            </Layout.Col>
          </Form.Item>
          <Form.Item label={t('formView.form.delivery')} prop='delivery'>
            <Switch onText='' offText='' value={delivery} onChange={v => this.onFieldChange('delivery', v)} />
          </Form.Item>
          <Form.Item label={t('formView.form.type')} prop='types'>
            <Checkbox.Group value={types} onChange={v => this.onFieldChange('type', v)}>
              <Checkbox label={t('formView.form.type_online')!} />
              <Checkbox label={t('formView.form.type_promotion')!} />
              <Checkbox label={t('formView.form.type_offline')!} />
              <Checkbox label={t('formView.form.type_brand')!} />
            </Checkbox.Group>
          </Form.Item>
          <Form.Item label={t('formView.form.resource')} prop='resource'>
            <Radio.Group value={resource}  onChange={v => this.onFieldChange('resource', v)}>
              <Radio value={t('formView.form.resource_sponsor')!} />
              <Radio value={t('formView.form.resource_venue')!} />
            </Radio.Group>
          </Form.Item>
          <Form.Item label={t('formView.form.detail')} prop='detail'>
            <Input value={detail} type='textarea' onChange={v => this.onFieldChange('detail', v)} />
          </Form.Item>
          <Form.Item>
            <Button type='primary' onClick={this.handleSubmit}>{t('common.operation.submit')}</Button>
            <Button>{t('common.operation.cancel')}</Button>
            <Button type='warning' onClick={this.handleReset}>{t('common.operation.reset')}</Button>
          </Form.Item>
        </Form>
        
      </div>
    );
  }

  handleSubmit = () => {

    this.refKey.form!.validate(valid => {
      if(valid) {
        Message({ 
          message: this.props.t('formView.message.submitted'), 
          type: 'success',
          duration: 1000,
          onClose: () => this.handleReset()
        });
      } else {
        return false;
      }
    });
  }

  handleReset = () => {
    this.setState(DEFAULT_STATE, 
      () =>  setTimeout(() => this.refKey.form!.resetFields(), 100)
    );
  }
}

export default withTranslation()(FormDemo);