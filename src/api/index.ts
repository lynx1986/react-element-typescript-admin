import axios, { AxiosRequestConfig } from 'axios';
import { ApiResponse } from './types';


export function request(config: AxiosRequestConfig): Promise<ApiResponse> {

    return new Promise(resolve => {
        axios.request(config).then((res) => {
            console.log(res);
            if (res.status === 200) {
                const { errno, data, errmsg } = res.data;
                resolve({
                    code: errno === 0 ? 200 : errno ,
                    data: data,
                    msg: errmsg
                });
            } else {
                resolve({
                    code: 500,
                    data: null,
                    msg: 'Api Response Error'
                });
            }
        }).catch(e => {
            resolve({
                code: 500,
                data: null,
                msg: 'Api Request Failed'
            });
        });
    });
}