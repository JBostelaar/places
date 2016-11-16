import React from 'react';
import store from 'app/store';
import ReactDOM from 'react-dom';
import { initAuth } from 'app/utils/initAuth';
import Root from 'app/components/Root';

function render() {
	ReactDOM.render((
		<Root />
	), document.getElementById('app'));
}

initAuth(store.dispatch).then(() => render());

if (process.env.NODE_ENV !== 'production' && module.hot) {
	module.hot.accept('./app/components/Root', () => {
		const NextRoot = require('./app/components/Root').default;
		ReactDOM.render((
			<NextRoot />
		), document.getElementById('app'));
	});
}
