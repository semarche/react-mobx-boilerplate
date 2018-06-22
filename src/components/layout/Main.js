import React, { Component } from 'react';
import universal from 'react-universal-component';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Header from './header/Header';

@inject('store', 'routing')
@withRouter
@observer
export default class Main extends Component {
	render() {
    const { authenticated } = this.props.store.appState;
		return (
			<div className='main'>
        {!authenticated && <Redirect to='/login' />}
        <Header />
        <Switch>
          <Route
            exact
            path='/'
            component={universal(() => import('./Home'))}
          />
          <Route
            exact
            path='/member'
            component={universal(() => import('./Member'))}
          />
          <Route
            component={universal(() => import('./NotFound'))}
            status={404}
          />
        </Switch>
			</div>
		);
	}
}
