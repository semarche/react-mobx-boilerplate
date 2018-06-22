import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';
import { store, rehydrate, hotRehydrate } from 'rfx-core';
import App from './components/App';
import stores from './stores/stores';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.scss'

export const isProduction = process.env.NODE_ENV === 'production';
store.setup(stores);
const appStore = rehydrate();

const renderApp = Component => {
  const browserHistory = createBrowserHistory();
  const routeStore = new RouterStore();
  const history = syncHistoryWithStore(browserHistory, routeStore);

	render(
		<AppContainer>
      <Provider store={isProduction ? appStore : hotRehydrate()} routing={routeStore} >
			  <Router history={history}>
					<Component />
			  </Router>
      </Provider>
		</AppContainer>,
		document.getElementById('root')
	);
};

renderApp(App);

if (module.hot) {
	module.hot.accept(() => renderApp(App));
}
