import React from 'react';
import { connect } from 'react-redux';
import { signIn } from 'app/actions/auth';
import * as firebase from 'firebase';

export class Login extends React.Component {
	constructor() {
		super();

		this.login = this.login.bind(this);
	}

	login() {
		const provider = new firebase.auth.GoogleAuthProvider();
		this.props.signIn(provider);
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

export default connect(null, { signIn })(Login);

Login.propTypes = {
	signIn: React.PropTypes.func,
};
