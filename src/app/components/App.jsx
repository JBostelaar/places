import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export function App({ sessionToken }) {
	return (
		<main>
			{sessionToken}
			<Link to="/login">Go to login</Link>
		</main>
	);
}

App.propTypes = {
	sessionToken: React.PropTypes.string,
};

const mapStateToProps = state => ({
	sessionToken: state.session.token,
});

export default connect(mapStateToProps)(App);
