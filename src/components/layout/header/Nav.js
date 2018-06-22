import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import ActiveLink from '../../ui/ActiveLink';
import './nav.scss';

@inject('store')
@observer
export default class Nav extends Component {
	render() {
		const { authenticated } = this.props.store.appState;
		return (
			<nav>
				<ActiveLink activeOnlyWhenExact={true} to='/'>Home</ActiveLink>
				{authenticated && <ActiveLink to='/member'>Member</ActiveLink>}
			</nav>
		);
	}
}
