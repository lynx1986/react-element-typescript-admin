import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Tag } from 'element-react';
import { inject, observer } from 'mobx-react';
import { AppState } from '../../../stores/app';
import { RouteItem } from '../../../routes';

import styles from './index.module.scss';
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

        const affixRoutes = filterAffixRoutes(routes);
        const curRoute = findRoute(routes, history.location.pathname);
        if (curRoute && (!curRoute.meta || !curRoute!.meta.affix)) {
            affixRoutes.push(curRoute);
        }
        app!.initVisitedViews(affixRoutes);

        this.unlisten = history.listen(location => {
            const curRoute = findRoute(this.props.routes, location.pathname);
            if (curRoute) {
                app?.addView(curRoute);
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
                { views.map(view => this.renderTag(view)) }
            </div>
        )
    }

    renderTag(route: RouteItem) {

        const { history, t } = this.props;

        const isActive = route.fullPath === history.location.pathname;
        console.log('path=' + route.path + ' fullPath=' + route.fullPath);

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
        this.props.history.replace(route.fullPath!);
    }
}

export default withRouter(withTranslation()(TagView));