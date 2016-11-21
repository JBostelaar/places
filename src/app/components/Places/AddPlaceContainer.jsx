import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { addPlace, updatePlace, fetchPlaces } from 'app/actions/places';
import Input from 'app/components/elements/Input';
import Rating from 'app/components/elements/Rating';
import SelectRegion from 'app/components/elements/SelectRegion';
import Toggle from 'app/components/elements/Toggle';
import regions from 'app/utils/regions';

export class AddPlaceContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			name: '',
			visited: false,
			rating: 0,
			region: null,
		};

		this.addPlace = this.addPlace.bind(this);
		this.toggleVisited = this.toggleVisited.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		if (!this.props.routeParams.id) return;
		this.props.fetchPlaces();
		this.setPlace(this.props.place);
	}

	componentWillReceiveProps(props) {
		if (props.place === this.props.place) return;
		this.setPlace(props.place);
	}

	setPlace(place) {
		if (!place) return;
		this.setState({
			name: place.name,
			rating: place.rating,
			visited: place.visited,
			region: place.region.name,
		});
	}

	toggleVisited() {
		this.setState({ visited: !this.state.visited, rating: 0 });
	}

	handleChange(value, name) {
		this.setState({ [name]: value });
	}

	addPlace(e) {
		e.preventDefault();
		const { place } = this.props;

		const newPlace = {
			...place,
			...this.state,
			region: regions.find(reg => reg.name === this.state.region),
		};

		if (place) {
			this.props.updatePlace(newPlace);
			browserHistory.push(`/places/${place.id}`);
		} else {
			this.props.addPlace(newPlace);
		}
	}

	render() {
		const { region, visited, name, rating } = this.state;
		return (
			<section className="add-place">
				<form onSubmit={this.addPlace}>
					<Input name="name" type="text" label="Naam" value={name} handleChange={this.handleChange} />
					<SelectRegion options={regions} value={region} onClick={this.handleChange} />
					<Toggle onChange={this.toggleVisited} label="Bezocht" value={visited} />
					{visited ? (
						<Rating handleChange={this.handleChange} value={rating} />
					) : null}
					<button type="submit" className="add-place__submit">{this.props.place ? 'Bewerken' : 'Toevoegen'}</button>
				</form>
			</section>
		);
	}
}

AddPlaceContainer.propTypes = {
	addPlace: React.PropTypes.func,
	updatePlace: React.PropTypes.func,
	fetchPlaces: React.PropTypes.func,
	place: React.PropTypes.object,
	routeParams: React.PropTypes.object,
};

export default connect((state, props) => ({
	place: state.places.places ? state.places.places[props.routeParams.id] : null,
}), { addPlace, updatePlace, fetchPlaces })(AddPlaceContainer);
