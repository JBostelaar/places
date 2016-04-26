'use strict';

import React from 'react';
import {render} from 'react-dom';
import App from 'client/components/App';

export default function renderPage() {
	render(
		<App/>, document.getElementById('app')
	);
}
