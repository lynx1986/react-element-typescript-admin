import Mock from 'mockjs';
import { getQueryValue } from './index';

const Random = Mock.Random;
Mock.setup({ timeout: '1000' });

export const login = Mock.mock('/api/login', 'post', (options: any) => {

    const { username, password } = JSON.parse(options.body);
    if ((username === 'admin' && password === 'admin') ||
        (username === 'guest' && password === 'guest')) {
        return {
            errno: 0,
            errmsg: '',
            data: username
        }
    }

    return {
        errno: 401,
        errmsg: 'Invalid password',
        data: null
    };
});


export const loginByToken = Mock.mock('/api/login?method=token', 'post', (options: any) => {

    const token = options.body;
    if (token === 'admin' || token === 'guest') {
        return {
            errno: 0,
            errmsg: '',
            data: token
        }
    }

    return {
        errno: 401,
        errmsg: 'Invalid Token',
        data: null
    };
});

export const fetchUserInfo = Mock.mock(/api\/userInfo\?/, 'get', (options: any) => {

    const name = getQueryValue(options.url, 'token');
    const roles = [];
    if (name === 'admin') {
        roles.push('admin');
    } else {
        roles.push('roleA');
    }

    return {
        errno: 0,
        errmsg: '',
        data: {
            user: {
                id: Random.id(),
                name: Random.name()
            },
            roles: roles
        }
    }
});