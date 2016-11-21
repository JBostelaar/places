import React from 'react';

const Input = ({ label, name, type, value, handleChange }) => (
	<div className="input-field">
		{label ? (
			<label htmlFor={name}>{label}</label>
		) : ''}
		<input
			id={name}
			type={type}
			className="input-text"
			value={value}
			onChange={(e) => handleChange(e.target.value, name)}
			autoComplete="false"
		/>
	</div>
);

Input.propTypes = {
	label: React.PropTypes.string,
	name: React.PropTypes.string,
	type: React.PropTypes.string,
	value: React.PropTypes.string,
	handleChange: React.PropTypes.func,
};

export default Input;
