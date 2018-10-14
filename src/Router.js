import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import NotFound from './components/NotFound';

export default () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='*' component={NotFound} />
    </Switch>
  </main>
);
