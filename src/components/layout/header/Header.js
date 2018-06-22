import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './header.scss';

import Nav from './Nav';
import Button from '../../ui/Button';

@inject('store')
@observer
export default class Header extends Component {

	authenticate(e) {
		if (e) e.preventDefault();
    this.props.store.appState.authenticate();
	}

	render() {
		const { authenticated } = this.props.store.appState;

		return (
			<header className='header'>
				<Nav />

				<Button
					onClick={this.authenticate.bind(this)}
					title={authenticated ? 'Log out' : 'Sign in'}
				/>
			</header>
		);
	}
}
