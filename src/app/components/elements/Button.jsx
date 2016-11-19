import React from 'react';
import Icon from 'app/components/elements/Icon';

const Button = ({ classNames, onClick, label, icon }) => (
	<button type="button" className={classNames} onClick={onClick}>
		{icon ? (
			<Icon svg={icon} />
		) : null} {label}
	</button>
);

Button.propTypes = {
	classNames: React.PropTypes.string,
	label: React.PropTypes.string,
	onClick: React.PropTypes.func,
	icon: React.PropTypes.string,
};

export default Button;
