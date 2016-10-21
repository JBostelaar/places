import React from 'react';

export default class Input extends React.Component {
	constructor(props) {
		super();

		this.state = {
			value: props.options[0].name,
			options: [],
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	render() {
		const { name, options } = this.props;

		return (
			<div className="select-field">
				<select name={name} onChange={this.handleChange}>
					{options.map(option => (
						<option value={option.name} key={option.name}>{option.label}</option>
					))}
				</select>
			</div>
		);
	}
}

Input.propTypes = {
	name: React.PropTypes.string,
	options: React.PropTypes.array,
};
