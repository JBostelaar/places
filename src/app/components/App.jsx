import React from 'react';
import Header from 'app/components/Header';

const App = ({ children, location }) => (
	<main>
		<Header path={location.pathname} />
		{children}
	</main>
);

App.propTypes = {
	children: React.PropTypes.object.isRequired,
	location: React.PropTypes.object.isRequired,
};

export default App;
