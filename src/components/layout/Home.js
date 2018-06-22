import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './home.scss'

@inject('store')
@observer
export default class Home extends Component {
	render() {
		const { store } = this.props;
		return (
			<div className='page home'>
        <h1>Home page</h1>
			</div>
		);
	}
}
