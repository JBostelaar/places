import React from 'react';
import { connect } from 'react-redux';
import { signOut } from 'app/actions/auth';

const Profile = ({ user, ...props }) => {
	if (!user) return null;

	return (
		<section className="profile">
			{user.displayName}
			<button onClick={props.signOut}>Logout</button>
		</section>
	);
};

export default connect(state => ({
	user: state.auth.user,
}), { signOut })(Profile);
