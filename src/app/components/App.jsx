import React from 'react';
import Header from 'app/components/Header';
import { signOut } from 'app/actions/auth';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export class App extends React.Component {
	componentDidMount() {
		if (!this.props.isAuthenticated) {
			browserHistory.push('/login');
		}
	}

	render() {
		const { children, location } = this.props;

		return (
			<main>
				<Header path={location.pathname} logOut={this.props.signOut} />
				{children}
			</main>
		);
	}
}

export default connect(state => ({
	user: state.auth.user,
	isAuthenticated: state.auth.authenticated,
}), { signOut })(App);

App.propTypes = {
	children: React.PropTypes.object,
	location: React.PropTypes.object,
	signOut: React.PropTypes.func,
	user: React.PropTypes.object,
	isAuthenticated: React.PropTypes.bool,
};
