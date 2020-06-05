import { observable, action, runInAction } from 'mobx';
import { ActionPayload } from '../api/types';
import Base from './base';
import * as CookieUtil from '../utils/cookie';
import { configLocale } from '../lang';
import { RouteItem } from '../routes';

export interface AppState {

    lang: String;
    updateSetting: Function;
    
    cachedViews: RouteItem[];
    visitedViews: RouteItem[];
    addView: Function;
    removeView: Function;
    removeAllViews: Function;
    initVisitedViews: Function;
    isCached: Function;
}

class App extends Base {

    @observable lang = CookieUtil.getAttr(CookieUtil.KEYS.language) || 'cn';
    @observable cachedViews: RouteItem[] = [];
    @observable visitedViews: RouteItem[] = [];

    @action
    updateSetting(payload: ActionPayload) {

        const { params } = payload;

        if (params.key === 'lang') {
            this.updateLang(params.value);
        }

        super.execCallback(payload);
    }

    @action
    updateLang(lang: string) {
        runInAction('updateLang', () => this.lang = lang);
        configLocale(lang);
        CookieUtil.setAttr(CookieUtil.KEYS.language, lang);
    }

    @action
    addView(view: RouteItem) {
        runInAction('addView', () => {

            console.log(this.visitedViews.map(v => v.path), view);

            if (view.meta && view.meta.cached) {
                if (!this.cachedViews.find(c => c.path === view.path)) {
                    this.cachedViews.push(view);
                }
            }
            
            if (!this.visitedViews.find(v => v.path === view.path)) {
                this.visitedViews.push(view);
            }
        });
    }

    removeView(view: RouteItem) {

        if (view.meta?.affix === true) return;

        console.log('removeView', view);
        this.removeCacheView(view);
        this.removeVisitedView(view);
    }

    @action
    removeCacheView(view: RouteItem) {
        runInAction('addView', () => {
            const views = [...this.cachedViews];
            const index = views.findIndex(c => c.path === view.path);
            if (index >= 0) {
                views.splice(index, 1);
            }
            this.cachedViews = views;
            console.log(this.visitedViews, this.cachedViews);
        });
    }

    @action
    removeVisitedView(view: RouteItem) {
        runInAction('addView', () => {
            const views = [...this.visitedViews];
            const index = views.findIndex(v => v.path === view.path);
            if (index >= 0) {
                views.splice(index, 1);
            }
            this.visitedViews = views;
            console.log(this.visitedViews, this.cachedViews);
        });
    }

    @action
    removeAllViews() {
        runInAction('removeAllView', () => {
            const affixViews = this.cachedViews.filter(v => v.meta?.affix === true );
            this.cachedViews = affixViews;
            this.visitedViews = affixViews;
        });
    }

    @action
    initVisitedViews(views: RouteItem[]) {
        runInAction('initVisitedViews', () => this.visitedViews = [...views] );
    }

    isCached(view: RouteItem): boolean {

        if (!view.meta || !view.meta.cached) {
            return false;
        }
        return this.cachedViews.findIndex(v => v.path === view.path) >= 0;
    }
}

export default new App();