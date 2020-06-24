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


const commonRoute = {
    path: '/dynamic', name: 'dynamic', hasLayout: true,
    meta: { icon: 'box-plot' },
    children: [
        {
        path: '', name: 'dynamicIndex', component: 'Dynamic',
        meta: { icon: 'box-plot' }
        },
        {
        path: '/adminOnly', name: 'adminOnly', component: 'RoleOnly',
        meta: { roles: ['admin'], icon: 'user' }
        },
        {
        path: '/roleAOnly', name: 'roleAOnly', component: 'RoleOnly',
        meta: { roles: ['roleA'], icon: 'user' }
        }
    ]
}

export const fetchUserInfo = Mock.mock(/api\/userInfo\?/, 'get', (options: any) => {

    const name = getQueryValue(options.url, 'token');
    const roles = [];
    const routes = [];

    if (name === 'admin') {
        roles.push('admin');
        routes.push(commonRoute);
        routes.push({ 
            id: 1, path: '/manage', name: 'manage', hasLayout: true,
            meta: { icon: 'control' },
            children: [
                {
                    path: '/routes', name: 'routes', component: 'ManageRoutes',
                    meta: { icon: 'apartment' }
                }
            ] 
        });
    } else {
        roles.push('roleA');
        routes.push(commonRoute);
        routes.push({ 
            id: 1, path: '/cruddemo', name: 'crudDemo', hasLayout: true,
            meta: { icon: 'profile' },
            children: [
                {
                    path: '/crudA', name: 'crudA', component: 'CrudDemoA', routeId: '0001',
                    meta: { icon: 'bars' }
                },
                {
                    path: '/crudB', name: 'crudB', component: 'Crud', routeId: '0002',
                    meta: { icon: 'bars' }
                },
            ] 
        });
    }

    return {
        errno: 0,
        errmsg: '',
        data: {
            user: {
                id: Random.id(),
                name: Random.name()
            },
            roles,
            routes
        }
    }
});
