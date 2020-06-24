import { observable, action, runInAction } from 'mobx';
import { AxiosRequestConfig } from 'axios';
import Base from './base';
import * as CookieUtil from '../utils/cookie';
import { ActionPayload, User, RouteItem } from '../api/types';

export interface AuthState {
  user: User | null;
  roles: string[];
  routes: RouteItem[];
  token: string;
  login: Function;
  loginByToken: Function;
  logout: Function;
}

class Auth extends Base {

  @observable roles = [];
  @observable token = CookieUtil.getAttr(CookieUtil.KEYS.token) || '';
  @observable user = null;
  @observable routes = [];

  @action
  async login(payload: ActionPayload) {

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/api/login',
      data: payload.params
    };

    const response = await super.request(config, payload);
    if (response.code === 200) {
      runInAction('Login', () => this.token = response.data);
      CookieUtil.setAttr(CookieUtil.KEYS.token, response.data);
      
      this.fetchUserInfo(response.data);
    }
  }

  @action
  async loginByToken(payload: ActionPayload) {

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/api/login?method=token',
      data: this.token
    };

    const response = await super.request(config, payload);
    if (response.code === 200) {
      runInAction('Login', () => this.token = response.data);
      CookieUtil.setAttr(CookieUtil.KEYS.token, response.data);

      this.fetchUserInfo(response.data);
    }
  }


  @action
  async fetchUserInfo(token: string) {

    const config: AxiosRequestConfig = {
      url: '/api/userInfo?token=' + token
    };

    const response = await super.request(config);
    if(response.code === 200) {
      runInAction('fetchUserInfo', () => {
        this.routes = response.data.routes;
        this.roles = response.data.roles;
        this.user = response.data.user;
      });
    }
  }

  @action
  async logout() {
    runInAction('Logout', () => {
      this.token = '';
      this.roles = [];
      this.routes = [];
      this.user = null;
    });
  }
}

export default new Auth();