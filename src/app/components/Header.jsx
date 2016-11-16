import React from 'react';
import { Link } from 'react-router';

const Header = ({ path }) => (
	<header className="header">
		{path !== '/' ? (
			<Link to="/" className="header__back"><img src="/img/l-arrow.svg" role="button" alt="add" /></Link>
			) : (
			<Link to="/profile" className="header__profile"><img src="/img/profile.svg" role="button" alt="add" /></Link>
		)}
		<h1 className="header__title">Places</h1>
		<Link to="/add" className="header__add"><img src="/img/add.svg" role="button" alt="add" /></Link>
	</header>
);

Header.propTypes = {
	path: React.PropTypes.string.isRequired,
};

export default Header;
