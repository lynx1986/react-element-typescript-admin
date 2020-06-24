
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

export interface Author {
    id: number;
    name: string;
    city: string;
    age: number;
}

export interface User {
    id: number;
    name: string;
}

export interface CrudField {
    id: string;
    prop: string;
    formType: number;
    formOptions ?: string[];
    listVisible: boolean;
    updateVisible: boolean;
    createVisible: boolean;
    updateEditable: boolean;
    listWidth: number;
    index: number;
}

export interface RouteItem {
    path: string;
    name?: string;
    redirect?: string;
    hidden?: boolean;
    component?: string;
    hasLayout?: boolean;
    fullPath?: string;
    realPath?: string;
    meta?: {
      roles?: string[];
      title?: string;
      icon?: string;
      cached?: boolean;
      breadcrumb?: boolean;
      affix?: boolean;
    };
    children?: RouteItem[];
  }