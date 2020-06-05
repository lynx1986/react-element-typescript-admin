import React from 'react';
import { Provider } from 'mobx-react';

import 'element-theme-default';
import './assets/styles/index.scss';
import './assets/icons/iconfont.css';

import { configLocale } from './lang';

import './mock';

import Router from './routes';
import * as store from './stores';

configLocale(store.app.lang);

function App() {
  return (
    <Provider {...store}>
      <Router />
    </Provider>
  );
}

export default App;
