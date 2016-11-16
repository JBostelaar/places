import React from 'react';
import { Link } from 'react-router';
import Icon from 'app/components/Icon';

import arrowIcon from 'app/images/l-arrow.svg';
import addIcon from 'app/images/add.svg';
import profileIcon from 'app/images/profile.svg';

const Header = ({ path }) => (
	<header className="header">
		{path !== '/' ? (
			<Link to="/" className="header__back">
				<Icon svg={arrowIcon} />
			</Link>
			) : (
			<Link to="/profile" className="header__profile">
				<Icon svg={profileIcon} />
			</Link>
		)}
		<h1 className="header__title">Places</h1>
		<Link to="/add" className="header__add">
			<Icon svg={addIcon} />
		</Link>
	</header>
);

Header.propTypes = {
	path: React.PropTypes.string.isRequired,
};

export default Header;
