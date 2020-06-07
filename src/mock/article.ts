import Mock from 'mockjs';

export const deleteArticle = Mock.mock(/api\/article\/[0-999]/, 'delete', {
    errno: 0,
    errmsg: '',
    data: undefined
});

export const fetchArticles = Mock.mock(/api\/article/, 'get', {
    errno: 0,
    errmsg: '',
    'data|10': [{
        'id|+1': 1,
        'title': '@sentence',
        'author': '@first',
        'views|5-100': 100,
        'status|0-2': 1,
        'datetime': '@datetime'
    }]
});


