import { i18n } from 'element-react';
import i81next from 'i18next';
import { initReactI18next } from "react-i18next";

import cnElLocale from 'element-react/src/locale/lang/zh-CN'
import enElLocale from 'element-react/src/locale/lang/en';
import jaElLocale from 'element-react/src/locale/lang/ja';

import cnLocale from './cn';
import enLocale from './en';

const elLocaleMap: Record<string, any> = {
    cn: cnElLocale,
    en: enElLocale,
    ja: jaElLocale
};

export const configLocale = function(lang: string): any {

    lang = lang.toLowerCase();

    const elLocale = elLocaleMap[lang] || enElLocale;
    i18n.use(elLocale);

    i81next.use(initReactI18next);
    i81next.init({ 
        lng: lang,
        react: {
            useSuspense: false
        },
        resources: {
            en: { translation: enLocale },
            cn: { translation: cnLocale }
        },
    });
}