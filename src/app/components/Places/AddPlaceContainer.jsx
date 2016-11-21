import React from 'react';
import { connect } from 'react-redux';
import { addPlace } from 'app/actions/places';
import Input from 'app/components/elements/Input';
import Rating from 'app/components/elements/Rating';
import SelectRegion from 'app/components/elements/SelectRegion';
import Toggle from 'app/components/elements/Toggle';
import regions from 'app/utils/regions';

export class AddPlaceContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			visited: false,
		};

		this.addPlace = this.addPlace.bind(this);
		this.toggleVisited = this.toggleVisited.bind(this);
	}

	toggleVisited() {
		this.setState({ visited: !this.state.visited });
	}

	addPlace(e) {
		e.preventDefault();

		this.props.addPlace({
			name: this.refs.name.state.value,
			region: regions.find(reg => reg.name === this.refs.region.state.value),
			rating: this.refs.rating ? this.refs.rating.state.value : 0,
			visited: this.state.visited,
		});
	}

	render() {
		return (
			<section className="add-place">
				<form onSubmit={this.addPlace}>
					<Input name="name" type="text" label="Naam" />
					<SelectRegion name="region" options={regions} ref="region" />
					<Toggle onChange={this.toggleVisited} label="Bezocht" value={this.state.visited} />
					{this.state.visited ? (
						<Rating ref="rating" />
					) : null}
					<button type="submit" className="add-place__submit">Toevoegen</button>
				</form>
			</section>
		);
	}
}

export default connect(null, { addPlace })(AddPlaceContainer);

AddPlaceContainer.propTypes = {
	addPlace: React.PropTypes.func,
};
