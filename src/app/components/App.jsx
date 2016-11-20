import React from 'react';
import Header from 'app/components/Header';
import ModalContainer from 'app/components/ModalContainer';

const App = ({ children, location }) => (
	<main>
		<Header path={location.pathname} />
		{children}
		<ModalContainer />
	</main>
);

App.propTypes = {
	children: React.PropTypes.object.isRequired,
	location: React.PropTypes.object.isRequired,
};

export default App;
