import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

@inject('store')
@observer
export default class Login extends Component {
	render() {
    const { authenticated, authenticate } = this.props.store.appState;
		return (
			<div className='page login'>
        {authenticated && <Redirect to='/' />}
        <h2>Login Form</h2>
        <h4 onClick={() => authenticate()}>Click there for Log In</h4>
			</div>
		);
	}
}
