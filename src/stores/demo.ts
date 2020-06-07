import { observable, action, runInAction } from 'mobx';
import { Article, ActionPayload } from '../api/types';
import * as api from '../api';
import Base from './base';
import { AxiosRequestConfig } from 'axios';

export interface DemoState {
    fetchArticles: Function;
    removeArticle: Function;
    articles: Article[];
}

class Demo extends Base {
    
    @observable
    articles: Article[] = [];

    @action
    async fetchArticles() {

        const url = '/api/article';
        
        const response = await api.request({ url });

        runInAction('FetchArticles', () => {
            if (response.code === 200) {
                this.articles = response.data;
            }
        });
    }

    @action
    async removeArticle(payload: ActionPayload) {

        const config: AxiosRequestConfig = {
            method: 'DELETE',
            url: '/api/article/' + payload.params.id
        };

        super.request(config, payload);
    }
}

export default new Demo();