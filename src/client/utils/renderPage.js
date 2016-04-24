'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../components/Dashboard';
import {data} from './data';

export default function renderPage() {
	ReactDOM.render(
		<Dashboard data={data}/>, document.getElementById('app')
	);
}
