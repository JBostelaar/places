import React from 'react';
import Icon from 'app/components/elements/Icon';
import fireIcon from 'app/images/fire.svg';
import dfireIcon from 'app/images/d-fire.svg';

export default class Rating extends React.Component {
	constructor(props) {
		super();

		this.state = { value: props.rating || 0 };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(rating) {
		this.setState({ value: rating });
	}

	render() {
		const { fixed } = this.props;
		const ratings = [];
		for (let i = 0; i < 5; i++) {
			ratings.push(
				<Icon
					svg={(i + 1) <= this.state.value ? fireIcon : dfireIcon}
					onClick={!fixed ? () => this.handleChange(i + 1) : null}
					key={i}
				/>
			);
		}

		return (
			<div className="rating-field">
				{!fixed ? (
					<label>Geef een beoordeling</label>
				) : null}
				<div className="rating">
					{ratings}
				</div>
			</div>
		);
	}
}
