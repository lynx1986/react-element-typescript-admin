import { observable, action, runInAction } from 'mobx';
import { Article } from '../api/types';
import * as api from '../api';

export interface DemoState {
    fetchArticles: Function;
    articles: Article[];
}

class Demo {
    
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
}

export default new Demo();