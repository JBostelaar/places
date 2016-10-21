import React from 'react';
import { Link } from 'react-router';

export default function Header() {
	return (
		<header className="header">
			<h1 className="header__title">Places</h1>
			<Link to="/add" className="header__add"><i className="header__add-icon">+</i></Link>
		</header>
	);
}
