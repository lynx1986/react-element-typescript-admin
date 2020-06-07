import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Breadcrumb, Dropdown } from 'element-react';
import { RouteComponentProps, withRouter } from "react-router-dom";

import * as RouteUtil from '../../../utils/route';
import Icon from '../../../components/Icon';

import styles from './index.module.scss';
import { RouteItem } from '../../../routes';

interface NavBarProps extends RouteComponentProps, WithTranslation {
    routes: RouteItem[];
    onLogout: Function;
    onLangUpdate: Function;
}

interface NavBarState {
    folded: boolean;
}


class NavBar extends React.Component<NavBarProps, NavBarState> {

    constructor(props: NavBarProps) {
        super(props);

        this.state = {
            folded: false
        }
    }

    render() {

        const { history, routes, t } = this.props;
        const matchedRoutes = RouteUtil.getMatchedRoutes(history.location.pathname, routes);

        // const { folded } = this.state;

        return (
            <div className={styles.navbar}>
                {/* <span className={styles.fold} onClick={() => this.setState({ folded: !folded })}>
                    <Icon size={20} name={ folded ? 'menu-fold' : 'menu-unfold' } />
                </span> */}
                <Breadcrumb className={styles.breadcrumb} separator='/'>
                    {
                        matchedRoutes.map(route =>
                            <Breadcrumb.Item>
                                <span>{t('route.' + route.name)}</span>
                            </Breadcrumb.Item>
                        )
                    }
                </Breadcrumb>
                <Dropdown className={styles.language} onCommand={this.handleLanguage} menu={(
                    <Dropdown.Menu>
                        <Dropdown.Item command='en'>English</Dropdown.Item>
                        <Dropdown.Item command='cn'>简体中文</Dropdown.Item>
                    </Dropdown.Menu>
                )}>
                    <span>
                        <span>{t('common.language')}</span>
                        <Icon size={8} name='caret-down' />
                    </span>
                </Dropdown>
                <Dropdown className={styles.dropMenu} onCommand={this.handleCommand} menu={(
                    <Dropdown.Menu>
                        <Dropdown.Item command='home'>{t('navMenu.home')}</Dropdown.Item>
                        <Dropdown.Item command='github'>GITHUB</Dropdown.Item>
                        <Dropdown.Item divided command='logout'>{t('navMenu.logout')}</Dropdown.Item>
                    </Dropdown.Menu>
                )}>
                    <span className={styles.avatar}>
                        <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" />
                        <Icon size={8} name='caret-down' />
                    </span>
                </Dropdown>
            </div>
        );
    }

    handleCommand = (command: string) => {

        if (command === 'home') {
            if (this.props.history.location.pathname !== '/dashboard') {
                this.props.history.push('/dashboard');
            }
        } else if (command === 'logout') {
            this.props.onLogout();
        } else if (command === 'github') {
            window.location.href='https://github.com/lynx1986/react-element-typescript-admin';
        }
    }

    handleLanguage = (lang: string) => {
        this.props.onLangUpdate(lang);
    }
}

export default withRouter(withTranslation()(NavBar));