import React from 'react';

export default class Rating extends React.Component {
	constructor() {
		super();

		this.state = { rating: 0 };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(rating) {
		this.setState({ value: rating });
	}

	render() {
		const ratings = [];
		for (let i = 0; i < 5; i++) {
			ratings.push(
				<img
					key={i} src={`/img/${(i + 1) <= this.state.value ? '' : 'd-'}fire.svg`}
					onClick={() => this.handleChange(i + 1)}
				/>
			);
		}

		return (
			<div className="rating-field">
				<label>Geef een beoordeling</label>
				<div className="rating">
					{ratings}
				</div>
			</div>
		);
	}
}
