import React from 'react';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { inject, observer } from 'mobx-react';
import SideMenu from './SideMenu';
import NavBar from './NavBar';

import styles from './index.module.scss';
import { RouteItem } from '../../config/routes';
import { AuthState } from '../../stores/auth';
import { AppState } from '../../stores/app';
import TagView from './TagView';

export interface BasicLayoutProps extends RouteComponentProps {
  routes: RouteItem[];
  auth?: AuthState;
  app?: AppState;
}

interface BasicLayoutState {

}


@inject('auth', 'app')
@observer
class BasicLayout extends React.Component<BasicLayoutProps, BasicLayoutState> {

  componentDidMount() {

    const { auth, history } = this.props;

    if (auth!.token === '') {
      history.replace('/login');
    } else {
      auth!.loginByToken({
        callback: {
          fail: () => history.replace('/login')
        }
      });
    }
  }

  render() {

    const { routes } = this.props;

    return (
      <div className={styles.basicLayout}>
        <div className={styles.aside}>
          <SideMenu routes={routes} />
        </div>
        <div className={styles.main}>
          <div className={styles.header}>
            <NavBar 
              routes={routes} 
              onLogout={this.handleLogout}
              onLangUpdate={this.handleLang}
            />
            <TagView routes={routes} />
          </div>
          <div className={styles.content}>
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }

  handleLogout = () => {
    this.props.auth!.logout();
    this.props.history.replace('/login');
  }

  handleLang = (lang: string) => {
    this.props.app!.updateSetting({
      params: { key: 'lang', value: lang },
      callback: {
        complete: () => this.forceUpdate()
      }
    })
  }
}

export default withRouter(BasicLayout);