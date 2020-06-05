
export interface ActionPayload {
    params?: any;
    callback?: {
        success: Function;
        fail: Function;
        complete: Function
    }
}

export interface ApiResponse {
    code: number;
    data: any;
    msg: string;
}

export enum ArticleStatus {
    draft,
    published,
    deleted,
}

export interface Article {
    id: number;
    title: string;
    author: string;
    views: number;
    status: number;
    datetime: string;
}

export interface User {
    id: number;
    name: string;
}