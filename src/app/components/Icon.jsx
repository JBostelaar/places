import React from 'react';

const Icon = ({ svg }) => (
	<span dangerouslySetInnerHTML={{ __html: svg } } ></span>
);

export default Icon;
