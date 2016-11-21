import React from 'react';
import classNames from 'classnames';

const Toggle = ({ onChange, label, value }) => (
	<div className="toggle-field">
		{label ? (
			<label>{label}</label>
		) : ''}
		<div
			className={classNames('toggle', {
				'toggle--active': value,
			})} onClick={onChange}
		></div>
	</div>
);

Toggle.propTypes = {
	label: React.PropTypes.string,
	value: React.PropTypes.bool,
	onChange: React.PropTypes.func,
};

export default Toggle;
