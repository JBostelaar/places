import React from 'react';
import Input from 'app/components/Input';
import Rating from 'app/components/Rating';
import SelectRegion from 'app/components/SelectRegion';
import Toggle from 'app/components/Toggle';
import { connect } from 'react-redux';
import { addPlace } from 'app/actions/places';
import * as firebase from 'firebase';
import regions from 'app/utils/regions';

export class AddPlaceContainer extends React.Component {
	static contextTypes = {
		router: React.PropTypes.object.isRequired,
	};

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
		const region = regions.find(reg => reg.name === this.refs.region.state.value);

		const place = {
			name: this.refs.name.state.value,
			region,
			rating: this.refs.rating ? this.refs.rating.state.value : 0,
			visited: this.refs.visited.state.value,
		};

		const newPlaceKey = firebase.database().ref().child('places').push().key;
		const updates = {};
		updates[`/places/${newPlaceKey}`] = place;
		updates[`/user-places/${this.props.user.id}/${newPlaceKey}`] = place;

		firebase.database().ref().update(updates);

		this.props.addPlace(place);
		this.context.router.push('/');
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
	user: state.user,
}), { addPlace })(AddPlaceContainer);

AddPlaceContainer.propTypes = {
	addPlace: React.PropTypes.func,
	user: React.PropTypes.object,
};
