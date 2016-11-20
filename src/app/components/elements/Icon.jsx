import React from 'react';

const Icon = ({ svg, onClick, className }) => (
	<span
		dangerouslySetInnerHTML={{ __html: svg }}
		onClick={onClick}
		className={className ? `icon ${className}` : 'icon'}
	></span>
);

Icon.propTypes = {
	svg: React.PropTypes.string.isRequired,
	onClick: React.PropTypes.func,
	className: React.PropTypes.string,
};

export default Icon;
