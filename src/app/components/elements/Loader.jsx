import React from 'react';
import Icon from 'app/components/elements/Icon';
import loader from 'app/images/loader.svg';

const Loader = () => (
	<div className="loader">
		<Icon svg={loader} />
	</div>
);

export default Loader;
