import React from 'react';
import { connect } from 'react-redux';
import { signOut } from 'app/actions/auth';

const Profile = ({ user, ...props }) => {
	if (!user) return null;
	return (
		<section className="profile">
			<header className="profile__header">
				<img className="profile__picture" src={user.photoURL} />
				<div className="profile__meta">
					<h3>{user.displayName}</h3>
					<p>{user.email}</p>
				</div>
			</header>
			<section className="profile__actions">
				<ul>
					<li onClick={props.signOut}>Logout</li>
				</ul>
			</section>
		</section>
	);
};

Profile.propTypes = {
	user: React.PropTypes.object,
	signOut: React.PropTypes.func,
};

export default connect(state => ({
	user: state.auth.user,
}), { signOut })(Profile);
