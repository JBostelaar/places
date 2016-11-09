import store from 'app/store';
import getRoutes from 'app/utils/getRoutes';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { initAuth } from 'app/utils/initAuth';
import { syncHistoryWithStore } from 'react-router-redux';
import 'react-fastclick';

const history = syncHistoryWithStore(browserHistory, store);

function render() {
	ReactDOM.render((
		<Provider store={store}>
			<Router children={getRoutes(store)} history={history} />
		</Provider>
	), document.getElementById('app'));
}

initAuth(store.dispatch).then(() => render());
