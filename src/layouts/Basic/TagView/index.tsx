import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Tag } from 'element-react';
import { inject, observer } from 'mobx-react';
import { Menu, Item, Separator, MenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

import * as RouteUtil from '../../../utils/route';
import { AppState } from '../../../stores/app';
import { RouteItem } from '../../../config/routes';

import styles from './index.module.scss';
import './index.module.scss';
import { UnregisterCallback } from 'history';


export interface TagViewProps extends RouteComponentProps, WithTranslation {
    routes: RouteItem[];
    app?: AppState
}

function filterAffixRoutes(routes: RouteItem[], basePath=''): RouteItem[] {

    const affixRoutes: RouteItem[] = [];
    routes.forEach(route => {

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

        this.unlisten = history.listen(location => this.handleLocationChange(location.pathname));
    }

    handleLocationChange = (pathname: string) => {

        const { routes, app } = this.props;
        const matchedRoutes = RouteUtil.getMatchedRoutes(pathname, routes);

        if (matchedRoutes.length > 0) {
            const matchedRoute = matchedRoutes[matchedRoutes.length - 1];
            if (matchedRoute.hidden) return;
            matchedRoute.realPath = pathname;
            app?.addView(matchedRoute);
        }
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {

        const { t } = this.props;
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
                    {/* <Item data={{ command: 'refresh' }} onClick={this.handleContextMenu}>
                        刷新
                    </Item> */}
                    <Item
                     data={{ command: 'close' }} onClick={this.handleContextMenu}>
                        {t('tagView.close')}
                    </Item>
                    <Separator />
                    <Item data={{ command: 'closeAll' }} onClick={this.handleContextMenu}>
                        {t('tagView.closeAll')}
                    </Item>
                    <Item data={{ command: 'closeOthers' }} onClick={this.handleContextMenu}>
                        {t('tagView.closeOthers')}
                    </Item>
                    <Item data={{ command: 'closeRight' }} onClick={this.handleContextMenu}>
                        {t('tagView.closeRight')}
                    </Item>
                </Menu>
            </div>
        )
    }

    renderTag(route: RouteItem) {

        const { history, t } = this.props;
        const pathname = history.location.pathname;
        const isActive = route.fullPath === pathname;

        if (route.meta && route.meta.affix) {
            return (
                <Tag className={styles.tag} type={isActive ? 'success' : 'primary' } key={route.path}>
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

        // case 'refresh':
        //     app!.removeCacheView(route);
        //     // history.push(route.realPath || route.fullPath!, { key: Math.random() + 'abc' });
        //     break;
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