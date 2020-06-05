import React from 'react';
import { Menu } from 'element-react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RouteItem } from '../../../routes';
import Icon from '../../../components/Icon';

import styles from './index.module.scss';
import './index.module.scss';

export interface MenuProps extends RouteComponentProps, WithTranslation {
  routes: RouteItem[];
}


class SiderMenu extends React.Component<MenuProps, {}> {

  render() {

    const { routes, history } = this.props;
    const pathname = history.location.pathname;

    return (
      <Menu defaultActive={pathname} theme='dark' className={styles.siderMenu} onSelect={this.handleSelectMenuItem}>
        { this.renderMenuItems(routes) }
      </Menu>
    );
  }

  renderMenuItems(routes: RouteItem[], basePath='', depth=0) {

    let menuItems: JSX.Element[] = [];

    routes.forEach(route => {

      if (route.hidden) return;

      if (!route.children) {
        menuItems.push(
          <Menu.Item key={basePath + route.path} index={basePath + route.path} className={'menuitem_lvl' + depth}>
            { this.renderMenuTitle(route, route.name)}
          </Menu.Item>
        )
      } else {
        menuItems.push(
          <Menu.SubMenu key={basePath + route.path} index={basePath + route.path} title={this.renderMenuTitle(route, route.name)} className={'submenu_lvl' + depth}>
            { this.renderMenuItems(route.children, basePath + route.path, depth+1) }
          </Menu.SubMenu>
        )
      }
    });
    return menuItems;
  }

  handleSelectMenuItem = (path: string) => {
    if (this.props.history.location.pathname !== path) {
      this.props.history.push(path);
    }
  }

  renderMenuTitle(route: RouteItem, title?: string) {

    if (route.meta && route.meta.icon) {
      return <Icon name={route.meta!.icon}>{this.props.t('route.' + title)}</Icon>
    }
    return <span>{title}</span>
  }
}

export default withRouter(withTranslation()(SiderMenu));