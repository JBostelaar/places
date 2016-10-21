import React from 'react';
import classNames from 'classnames';

export default class Input extends React.Component {
	constructor() {
		super();

		this.state = { value: '', error: false };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ value: e.target.value });

		if (this.state.error) this.setState({ error: false });
	}

	validate() {
		if (this.props.validator && !this.props.validator.call(undefined, this.state.value)) {
			this.setState({ error: true });
			return false;
		}

		this.setState({ error: false });
		return true;
	}

	render() {
		const { value, type, name, label } = this.props;
		const classes = classNames('input-field', {
			error: this.state.error,
		});

		return (
			<div className={classes}>
				{label ? (
					<label htmlFor={name}>{label}</label>
				) : ''}
				<input
					id={name}
					type={type}
					className="input-text"
					value={value}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

Input.propTypes = {
	label: React.PropTypes.string,
	name: React.PropTypes.string,
	type: React.PropTypes.string,
	validator: React.PropTypes.func,
	value: React.PropTypes.string,
};
