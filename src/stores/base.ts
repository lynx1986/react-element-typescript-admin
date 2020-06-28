import { action } from 'mobx';
import { AxiosRequestConfig } from 'axios';
import * as api from '../api';
import { ActionPayload, ApiResponse } from '../api/types';

export function execCallback(payload?: ActionPayload, response?: ApiResponse): void {

    if (!payload || !payload.callback) return;

    const { success, fail, complete } = payload.callback;
    if (response && response.code === 200) {
        success && success(response.data);
    } else if (response) {
        fail && fail(response.code);
    }
    complete && complete();
}

export default class Base {

    @action
    async request(config: AxiosRequestConfig, payload?: ActionPayload): Promise<ApiResponse> {
        const response = await api.request(config);
        execCallback(payload, response);
        return response;
    }
}