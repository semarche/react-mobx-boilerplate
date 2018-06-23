import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import Button from './ui/Button'
import './login.scss'

@inject('store')
@observer
export default class Login extends Component {
	render() {
    const { authenticated, authenticate } = this.props.store.appState;
		return (
			<div className='login-form'>
        {authenticated && <Redirect to='/' />}
        <h2>Login Form</h2>
        <h4>
          Click <Button title={'there'} onClick={() => authenticate()} /> to Log In
        </h4>
			</div>
		);
	}
}
