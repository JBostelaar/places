'use strict';

import React from 'react';
import Header from 'app/client/components/Header';

console.log(Header);

class Dashboard extends React.Component {
	render() {
		return (
			<main>
				<Header />
			</main>
		);
	}
}

export default Dashboard;
