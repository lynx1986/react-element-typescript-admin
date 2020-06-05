
import * as ArticleApis from './article';
import * as AuthApis from './auth';

export default {
    ...ArticleApis,
    ...AuthApis
};

export const getQueryValue = function(url: string, key: string): string | null {

    if (!url || url.indexOf('?') < 0) return null;

    const queryString = url.split('?')[1];
    if (!queryString) return null;

    const queries = queryString.split('&');
    const matchedParam = queries.find(query => query.startsWith(key + '='));
    if (!matchedParam) return null;

    return matchedParam.split('=')[1];
}