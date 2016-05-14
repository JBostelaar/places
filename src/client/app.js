import App from 'client/components/App';
import history from 'client/utils/history';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';

render((
	<Router history={history}>
		<Route path="/" component={App} />
	</Router>
), document.getElementById('app'));
