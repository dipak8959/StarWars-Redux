import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import PersonPage from './containers/PersonPage';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />
    <Route path="/person/:id" component={PersonPage} />
  </Route>
);
