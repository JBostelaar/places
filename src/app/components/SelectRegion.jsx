import React from 'react';
import classNames from 'classnames';

export default class Input extends React.Component {
	constructor() {
		super();

		this.state = {
			value: null,
			options: [],
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick(e) {
		this.setState({ value: e.target.dataset.value });
	}

	render() {
		const { options } = this.props;

		return (
			<div className="select-region">
				<label>Wijk</label>
				<div className="select-region__options">
					{options.map(option => (
						<a
							data-value={option.name} key={option.name}
							className={classNames({active: option.name === this.state.value})}
							onClick={this.onClick}
						>
							{option.label}
						</a>
					))}
				</div>
			</div>
		);
	}
}

Input.propTypes = {
	name: React.PropTypes.string,
	options: React.PropTypes.array,
};
