import React from 'react';
import Header from 'app/components/Header';

export default function App({ children, location }) {
	return (
		<main>
			<Header path={location.pathname} />
			{children}
		</main>
	);
}

App.propTypes = {
	children: React.PropTypes.object,
	location: React.PropTypes.object,
};
