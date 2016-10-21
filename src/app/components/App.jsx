import React from 'react';
import Header from 'app/components/Header';

export default function App({ children }) {
	return (
		<main>
			<Header />
			{children}
		</main>
	);
}

App.propTypes = {
	children: React.PropTypes.object,
};
