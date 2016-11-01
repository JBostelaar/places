import React from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { updateUser } from 'app/actions/user';
import { browserHistory } from 'react-router';

export class Login extends React.Component {
	constructor() {
		super();

		this.login = this.login.bind(this);
	}

	login() {
		const provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/plus.login');

		firebase.auth().signInWithPopup(provider).then(result => {
			this.props.updateUser(result.user);
			browserHistory.push('/');
		}).catch(error => {
			console.log('User error!', error);
		});
	}

	render() {
		return (
			<section className="login">
				<div className="login__container">
					<h1 className="login__title">Places</h1>
					<button className="login__button" onClick={this.login}>Login with Google</button>
				</div>
			</section>
		);
	}
}

export default connect(null, { updateUser })(Login);
