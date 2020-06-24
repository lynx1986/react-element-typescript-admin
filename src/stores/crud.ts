import { observable, runInAction, action } from "mobx";
import * as api from '../api';
import { ActionPayload, CrudField } from "api/types";
import Base from "./base";
import { AxiosRequestConfig } from "axios";


export interface CrudState<T> {
    fetch: Function;
    remove: Function;
    update: Function;
    create: Function;
    fetchFields: Function;
    items: Array<T>;
    fields: Array<CrudField>;
}

export default class Crud<T> extends Base {

    @observable
    items: T[] = [];

    @observable
    fields: CrudField[] = [];

    @action
    async fetchFields(payload: ActionPayload) {
        
        if (this.fields.length > 0) {
            super.execCallback(payload, { code: 200, data: this.fields, msg: '' });
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

        const config: AxiosRequestConfig = {
            method: 'GET',
            url: '/api/author'
        }

        const response = await super.request(config, payload);

        runInAction('fetch', () => {
            if (response.code === 200) {
                this.items = response.data;
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
}