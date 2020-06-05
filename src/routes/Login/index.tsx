import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Form, Input, Button, Message } from 'element-react';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { inject, observer } from 'mobx-react';


import Icon from '../../components/Icon';

import styles from './index.module.scss';
import { AuthState } from '../../stores/auth';

interface LoginProps extends RouteComponentProps, WithTranslation {
  auth?: AuthState
}

interface LoginState {
  username: string;
  password: string;
  loading: boolean;
}

interface IFormKey {
  form?: Form
}

const DEFAULT_STATE = {
  username: 'admin',
  password: 'admin',
  loading: false,
}

@inject('auth')
@observer
class Login extends React.Component<LoginProps, LoginState> {

  constructor(props: any) {
    super(props);

    this.state = DEFAULT_STATE;
  }

  componentDidMount() {
    console.log(this.props);
  }

  rules = {
    username: [
      { required: true, message: 'Please input username', trigger: 'blur' }
    ],
    password: [
      { required: true, message: 'Please input password', trigger: 'blur' }
    ]
  };

  refKey: IFormKey = {};

  onFieldChange = (key: string, value: any) => {
    this.setState(Object.assign({}, this.state, { [key]: value }));
  }

  render() {

    const { username, password, loading } = this.state;
    const { t } = this.props;

    return (
      <div className={styles.loginPage}>
        <div className={styles.loginForm}>
          <Form ref={(ref: any) => this.refKey.form = ref} model={this.state} rules={this.rules} >
            <Form.Item prop='username'>
              <Input 
                value={username} autoComplete='off' placeholder='admin / guest'
                prepend={<Icon name='user' />}
                onChange={v => this.onFieldChange('username', v)} />
            </Form.Item>
            <Form.Item prop='password'>
              <Input 
                value={password} autoComplete='off' type='password' placeholder='admin / guest'
                prepend={<Icon name='lock' />} 
                onChange={v => this.onFieldChange('password', v)} />
            </Form.Item>
          </Form>

          <Button loading={loading} className={styles.loginButton} type='primary' onClick={this.handleSubmit}>
            {t('loginView.login')}
          </Button>
        </div>
      </div>
    )
  }

  handleSubmit = () => {

    const { t } = this.props;

    this.refKey.form!.validate(valid => {
      if(valid) {

        this.setState({ loading: true });

        const { username, password } = this.state;
        this.props.auth!.login({
          params: { username, password },
          callback: {
            success: () => {
              Message({
                message: t('loginView.message.loginOK'),
                type: 'success',
                duration: 1000,
                onClose: () => this.props.history.replace('/')
              });
            },
            fail: () => 
              Message({ 
                message: t('loginView.message.loginNG'), 
                type: 'error', 
                duration: 1000 
              }),
            complete: () => {
              this.setState({ loading: false });
            }
          }
        });
      } else {
        return false;
      }
    });
  }

  handleReset = () => {
    this.setState(DEFAULT_STATE, () =>  setTimeout(() => this.refKey.form!.resetFields(), 100));
  }
}


export default withRouter(withTranslation()(Login));