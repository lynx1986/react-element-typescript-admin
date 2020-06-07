import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Tag } from 'element-react';
import { inject, observer } from 'mobx-react';
import { Menu, Item, Separator, Submenu, MenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

import * as RouteUtil from '../../../utils/route';
import app, { AppState } from '../../../stores/app';
import { RouteItem } from '../../../routes';

import styles from './index.module.scss';
import './index.module.scss';
import { UnregisterCallback } from 'history';


export interface TagViewProps extends RouteComponentProps, WithTranslation {
    routes: RouteItem[];
    app?: AppState
}

function findRoute(routes: RouteItem[], pathname: string): RouteItem | undefined {

    if (routes.length === 0) return undefined;
    
    const matchedRoutes = routes.filter(r => pathname.startsWith(r.fullPath!));
    if (matchedRoutes.length === 0) return undefined;
    let route = matchedRoutes[0] ;
    matchedRoutes.forEach(r => {
        if (r.fullPath!.length > route.fullPath!.length) {
            route = r;
        }
    });

    console.log(route.fullPath, pathname, route);
    if (route.fullPath === pathname) {
        return route;
    }

    if (!route.children) return undefined;
    return findRoute(route.children, pathname);
}

function filterAffixRoutes(routes: RouteItem[], basePath=''): RouteItem[] {

    const affixRoutes: RouteItem[] = [];
    routes.map(route => {

        if (route.meta && route.meta.affix) {
            affixRoutes.push(route);
        }

        if (route.children) {
            affixRoutes.concat(filterAffixRoutes(route.children));
        }
    });

    return affixRoutes;
}

@inject('app')
@observer
class TagView extends React.Component<TagViewProps> {

    unlisten: UnregisterCallback = () => {};

    componentDidMount() {

        const { app, history, routes } = this.props;

        const initViews = filterAffixRoutes(routes);
        const matchedRoutes = RouteUtil.getMatchedRoutes(history.location.pathname, routes);
        if (matchedRoutes.length > 0) {
            const matchedRoute = matchedRoutes[matchedRoutes.length - 1];
            if (matchedRoute && (!matchedRoute.meta || !matchedRoute!.meta.affix)) {
                initViews.push(matchedRoute);
            }
        }
        app!.initVisitedViews(initViews);

        this.unlisten = history.listen(location => {

            const matchedRoutes = RouteUtil.getMatchedRoutes(history.location.pathname, routes);
            if (matchedRoutes.length > 0) {
                const matchedRoute = matchedRoutes[matchedRoutes.length - 1];
                if (matchedRoute.hidden) return;
                matchedRoute.realPath = history.location.pathname;
                app?.addView(matchedRoute);
            }
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {

        const views = this.props.app!.visitedViews;
        
        return (
            <div className={styles.tagView}>
                { 
                    views.map(view => 
                        <MenuProvider id='context_menu' data={{ route: view }}>
                            { this.renderTag(view) }
                        </MenuProvider>
                    ) 
                }

                <Menu id='context_menu' className={styles.contextMenu}>
                    <Item data={{ command: 'refresh' }} onClick={this.handleContextMenu}>
                        刷新
                    </Item>
                    <Item
                     data={{ command: 'close' }} onClick={this.handleContextMenu}>
                        关闭
                    </Item>
                    <Separator />
                    <Item data={{ command: 'closeAll' }} onClick={this.handleContextMenu}>
                        关闭所有
                    </Item>
                    <Item data={{ command: 'closeOthers' }} onClick={this.handleContextMenu}>
                        关闭其它
                    </Item>
                    <Item data={{ command: 'closeRight' }} onClick={this.handleContextMenu}>
                        关闭右侧
                    </Item>
                </Menu>
            </div>
        )
    }

    renderTag(route: RouteItem) {

        const { history, t } = this.props;
        const pathname = history.location.pathname;

        const isActive = route.fullPath === pathname;
        console.log('path=' + route.path + ' fullPath=' + route.fullPath);

        if (route.meta && route.meta.affix) {
            return (
                <Tag type={isActive ? 'success' : 'primary' } key={route.path}>
                    <span onClick={() => this.handleNavTo(route)}>
                        {t('route.' + route.name)}
                    </span>
                </Tag>
            )
        } else {
            return (
                <Tag 
                    className={styles.tag} type={isActive ? 'success' : 'primary' } key={route.path} closable 
                    onClose={() => this.handleCloseTag(route)}>
                    <span onClick={() => this.handleNavTo(route)}>
                        {t('route.' + route.name)}
                    </span>
                </Tag>
            )
        }
    }

    handleCloseTag = (route: RouteItem) => {

        const { history, app } = this.props;

        app!.removeView(route);
        history.replace(app!.visitedViews[app!.visitedViews.length - 1].fullPath!);
    }

    handleNavTo = (route: RouteItem) => {
        this.props.history.replace(route.realPath || route.fullPath!);
    }

    handleContextMenu = (data: any) => {
        
        const { history, app } = this.props;
        const { command, route } = data.props;

        switch (command) {

        case 'refresh':
            history.replace(history.location.pathname);
            break;
        case 'close':
            app!.removeView(route); 
            history.replace(app!.visitedViews[app!.visitedViews.length - 1].fullPath!);
            break;
        case 'closeAll':
            app!.removeAllViews(); 
            history.replace(app!.visitedViews[app!.visitedViews.length - 1].fullPath!);
            break;
        case 'closeOthers':
            app!.removeOtherViews(route); 
            history.replace(app!.visitedViews[app!.visitedViews.length - 1].fullPath!);
            break;
        case 'closeRight':
            app!.removeViewsAfter(route); 
            history.replace(app!.visitedViews[app!.visitedViews.length - 1].fullPath!);
            break;
        }
    }
}

export default withRouter(withTranslation()(TagView));