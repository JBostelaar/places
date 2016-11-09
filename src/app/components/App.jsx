import React from 'react';
import Header from 'app/components/Header';
import { signOut } from 'app/actions/auth';
import { connect } from 'react-redux';

const App = ({ children, location, ...props }) => (
	<main>
		<Header path={location.pathname} logOut={props.signOut} />
		{children}
	</main>
);

App.propTypes = {
	children: React.PropTypes.object.isRequired,
	location: React.PropTypes.object.isRequired,
	signOut: React.PropTypes.func,
};

export default connect(null, { signOut })(App);
