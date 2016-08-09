import store from 'app/store';
import getRoutes from 'app/utils/getRoutes';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

window.store = store;

render((
	<Provider store={store}>
		<Router children={getRoutes()} history={browserHistory} />
	</Provider>
), document.getElementById('app'));
