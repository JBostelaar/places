import React from 'react';
import Loader from 'app/components/Loader';
import { connect } from 'react-redux';
import { fetchPlaces } from 'app/actions/places';

export class PlaceContainer extends React.Component {
	componentDidMount() {
		this.props.fetchPlaces(this.props.user.uid);
	}

	render() {
		const { places, routeParams } = this.props;

		if (!places) return <Loader />;
		const place = places[routeParams.id];
		return (
			<article>
				<h3>{place.name}</h3>
				<p>{place.region.label}</p>
				<p>{place.rating} <img src="/img/fire.svg" /></p>
			</article>
		);
	}
}

PlaceContainer.propTypes = {
	places: React.PropTypes.object,
	routeParams: React.PropTypes.object.isRequired,
	user: React.PropTypes.object,
	fetchPlaces: React.PropTypes.func.isRequired,
};

export default connect(state => ({
	places: state.places.places,
	user: state.auth.user,
}), { fetchPlaces })(PlaceContainer);
