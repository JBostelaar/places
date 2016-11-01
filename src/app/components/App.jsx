import React from 'react';
import Header from 'app/components/Header';
import firebaseConfig from 'app/utils/firebaseConfig';
import * as firebase from 'firebase';
import { updateUser } from 'app/actions/user';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

firebase.initializeApp(firebaseConfig);

export class App extends React.Component {
	constructor() {
		super();

		this.logOut = this.logOut.bind(this);
	}

	componentWillMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.props.updateUser(user);
			} else {
				browserHistory.push('/login');
			}
		});
	}

	logOut() {
		firebase.auth().signOut();
		this.props.updateUser({ logged_in: false });
	}

	render() {
		const { children, location, user } = this.props;

		if (!user.logged_in) return null;

		return (
			<main>
				<Header path={location.pathname} logOut={this.logOut} />
				{children}
			</main>
		);
	}
}

export default connect(state => ({
	user: state.user,
}), { updateUser })(App);

App.propTypes = {
	children: React.PropTypes.object,
	location: React.PropTypes.object,
	updateUser: React.PropTypes.func,
	user: React.PropTypes.object,
};
