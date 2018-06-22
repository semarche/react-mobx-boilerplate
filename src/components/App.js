import React from 'react';
import DevTools from 'mobx-react-devtools';
import universal from 'react-universal-component';
import { Route, Switch } from 'react-router-dom';

import { isProduction } from '../index';
import Main from './layout/Main';
import './app.scss'

const App = () => (
  <div className='wrapper'>
    {!isProduction && <DevTools />}
    <Switch>
      <Route
        exact
        path='/login'
        component={universal(() => import('./Login'))}
      />
      <Route
        path='/'
        component={Main}
      />
    </Switch>
  </div>
);

export default App
