import Mock from 'mockjs';
import { getQueryValue } from './index';

const Random = Mock.Random

export const deleteAuthor = Mock.mock(/api\/author\/[0-999]/, 'delete', {
    errno: 0,
    errmsg: '',
    data: undefined
});

export const updateAuthor = Mock.mock(/api\/author\/[0-999]/, 'put', {
    errno: 0,
    errmsg: '',
    data: undefined
});

export const createAuthor = Mock.mock(/api\/author/, 'post', {
    errno: 0,
    errmsg: '',
    data: undefined
});

export const fetchAuthors = Mock.mock(/api\/author/, 'get', (options: any) => {
    
    const current = parseInt(getQueryValue(options.url, 'current') || '0') + 1;
    const size = parseInt(getQueryValue(options.url, 'size') || '20');

    const items = [];
    for (let i = 0; i < size; i++) {
        items.push({
            'id': Random.id(),
            'name': Random.cname(),
            'city': Random.city(),
            'age': Random.integer(18, 80)
        })
    }

    return {
        errno: 0,
        errmsg: '',
        data: {
            items,
            page: {
                'total': Random.integer(110, 180),
                'size': size,
                'current': current
            }
        }
    }
});

export const fetchAuthorField = Mock.mock(/api\/field/, 'get', {
    errno: 0,
    errmsg: '',
    data: [
        { id: '@guid', prop: 'id', formType: -1, listVisible: false, updateVisible: false, createVisible: false, updateEditable: false, listWidth: 80, index: 0},
        { id: '@guid', prop: 'name', formType: 0, listVisible: true, updateVisible: false, createVisible: true, updateEditable: false, listWidth: 0, index: 1},
        { id: '@guid', prop: 'city', formType: 4, listVisible: true, updateVisible: true, createVisible: true, updateEditable: true, listWidth: 200, index: 2},
        { id: '@guid', prop: 'age', formType: 1, listVisible: true, updateVisible: true, createVisible: true, updateEditable: true, listWidth: 120, index: 3},
    ]
});