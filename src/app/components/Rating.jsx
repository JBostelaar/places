import React from 'react';

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
				<img
					key={i} src={`/img/${(i + 1) <= this.state.value ? '' : 'd-'}fire.svg`}
					onClick={!fixed ? () => this.handleChange(i + 1) : null}
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
