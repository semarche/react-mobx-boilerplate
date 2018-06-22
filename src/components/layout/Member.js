import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class Member extends Component {

	componentDidMount() {
    const { fetchData } = this.props.store.appState;
    fetchData('https://jsonplaceholder.typicode.com/users')
  }
  componentWillUnmount() {
    const { clearItems } = this.props.store.appState;
    clearItems()
  }

	render() {
    const { items } = this.props.store.appState;
		return (
			<div className='page member'>
				<main>
					<h1>Members' area</h1>
          <ul>
            {items.map(i => (
              <li key={i.id}>{i.name}</li>
            ))}
          </ul>
				</main>
			</div>
		);
	}
}
