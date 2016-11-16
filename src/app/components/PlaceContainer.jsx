import React from 'react';
import Loader from 'app/components/Loader';
import Rating from 'app/components/Rating';
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
			<article className="place">
				<header className="place__header">
					<img className="place__icon" src="/img/food.svg" />
					<div className="place__meta">
						<h2 className="place__title">{place.name}</h2>
						<p className="place__region">{place.region.label}</p>
					</div>
				</header>
				<Rating fixed rating={place.rating} />
				<section className="place__body">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</section>
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
