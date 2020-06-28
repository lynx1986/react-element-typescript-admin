import { observable, runInAction, action } from "mobx";
import { ActionPayload, CrudField, CrudPage } from "api/types";
import Base, { execCallback } from "./base";
import { AxiosRequestConfig } from "axios";
import qs from 'qs';


export interface CrudState<T> {

    fetch: Function;
    remove: Function;
    update: Function;
    create: Function;
    fetchFields: Function;

    items: Array<T>;
    fields: Array<CrudField>;
    pagination: CrudPage;
}

export default class Crud<T> extends Base {

    @observable
    items: T[] = [];

    @observable
    pagination: CrudPage = { total: 0, size: 20, current: 1 };

    @observable
    fields: CrudField[] = [];

    @action
    async fetchFields(payload: ActionPayload) {
        
        if (this.fields.length > 0) {
            execCallback(payload, { code: 200, data: this.fields, msg: '' });
            return;
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            url: '/api/fields'
        }

        const response = await super.request(config, payload);

        runInAction('fetch', () => {
            if (response.code === 200) {
                this.fields = response.data;
            }
        });
    }

    @action
    async fetch(payload: ActionPayload) {

        const filter = {
            current: this.pagination.current - 1,
            size: this.pagination.size
        };

        const config: AxiosRequestConfig = {
            method: 'GET',
            url: '/api/author?' + qs.stringify(filter)
        }

        const response = await super.request(config, payload);

        runInAction('fetch', () => {
            if (response.code === 200) {
                this.items = response.data.items;
                this.pagination = response.data.page;
            }
        });
    }

    @action
    async remove(payload: ActionPayload) {

        const config: AxiosRequestConfig = {
            method: 'DELETE',
            url: '/api/author/' + payload.params.item.id,
        };

        super.request(config, payload);
    }

    @action
    async update(payload: ActionPayload) {

        const config: AxiosRequestConfig = {
            method: 'PUT',
            url: '/api/author/' + payload.params.item.id,
            data: payload.params
        };

        super.request(config, payload);
    }

    @action
    async create(payload: ActionPayload) {

        const config: AxiosRequestConfig = {
            method: 'POST',
            url: '/api/author/',
            data: payload.params
        };

        super.request(config, payload);
    }

    @action
    async updatePage(name: string, value: string) {

        runInAction('updatePage', () => {
            this.pagination[name] = value;
        });
    }
}