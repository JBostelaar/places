import React from 'react';
import Input from 'app/components/Input';
import Rating from 'app/components/Rating';
import SelectRegion from 'app/components/SelectRegion';
import Toggle from 'app/components/Toggle';
import { connect } from 'react-redux';
import { addPlace } from 'app/actions/places';
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

		const place = {
			name: this.refs.name.state.value,
			region: regions.find(reg => reg.name === this.refs.region.state.value),
			rating: this.refs.rating ? this.refs.rating.state.value : 0,
			visited: this.refs.visited.state.value,
		};

		this.props.addPlace(place, this.props.uid);
	}

	render() {
		return (
			<section className="add-place">
				<form onSubmit={this.addPlace}>
					<Input name="name" type="text" ref="name" label="Naam" />
					<SelectRegion name="region" options={regions} ref="region" />
					<Toggle ref="visited" toggleVisited={this.toggleVisited} label="Bezocht" />
					{this.state.visited ? (
						<Rating ref="rating" />
					) : null}
					<button className="add-place__submit">Toevoegen</button>
				</form>
			</section>
		);
	}
}

export default connect(state => ({
	uid: state.auth.uid,
}), { addPlace })(AddPlaceContainer);

AddPlaceContainer.propTypes = {
	addPlace: React.PropTypes.func,
	uid: React.PropTypes.string,
};
