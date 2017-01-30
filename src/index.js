import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'bootstrap/dist/css/bootstrap.css';
import routes from './routes';
import configureStore from './store/configureStore';
import './styles/styles.scss';


import './styles/font-awesome-4.7.0/css/font-awesome.min.css';


require('./favicon.ico');

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
