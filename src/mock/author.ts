import Mock from 'mockjs';

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

export const fetchAuthors = Mock.mock(/api\/author/, 'get', {
    errno: 0,
    errmsg: '',
    'data|10': [{
        'id|+1': 1,
        'name': '@cname',
        'city': '@city',
        'age|1-100': 40
    }]
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

