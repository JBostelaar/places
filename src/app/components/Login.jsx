import React from 'react';
import { connect } from 'react-redux';
import { signIn } from 'app/actions/auth';
import * as firebase from 'firebase';

const Login = (props) => {
	const googleLogin = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		props.signIn(provider);
	};

	return (
		<section className="login">
			<div className="login__container">
				<h1 className="login__title">Places</h1>
				<button className="login__button" onClick={googleLogin}>Login with Google</button>
			</div>
		</section>
	);
};

Login.propTypes = {
	signIn: React.PropTypes.func,
};

export default connect(null, { signIn })(Login);
