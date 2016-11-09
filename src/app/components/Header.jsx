import React from 'react';
import { Link } from 'react-router';

const Header = ({ path, logOut }) => (
	<header className="header">
		{path !== '/' ? (
			<Link to="/" className="header__back"><img src="/img/l-arrow.svg" role="button" alt="add" /></Link>
			) : (
			<a onClick={logOut} className="header__profile"><img src="/img/profile.svg" role="button" alt="add" /></a>
		)}
		<h1 className="header__title">Places</h1>
		<Link to="/add" className="header__add"><img src="/img/add.svg" role="button" alt="add" /></Link>
	</header>
);

Header.propTypes = {
	path: React.PropTypes.string.isRequired,
	logOut: React.PropTypes.func,
};

export default Header;
