import Cookie from 'js-cookie';

export const KEYS = {
    language: 'language',
    token: 'token'
};

export const setAttr = function(key: string, value: string): void {
    Cookie.set(key, value);
}

export const getAttr = function(key: string): string | undefined {
    return Cookie.get(key);
}

export const removeAttr = function(key: string): void {
    Cookie.remove(key);
}