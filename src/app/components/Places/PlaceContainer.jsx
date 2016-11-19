import React from 'react';
import { connect } from 'react-redux';
import Loader from 'app/components/elements/Loader';
import Rating from 'app/components/elements/Rating';
import Button from 'app/components/elements/Button';
import Icon from 'app/components/elements/Icon';
import foodIcon from 'app/images/food.svg';
import deleteIcon from 'app/images/delete.svg';
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
					<Icon svg={foodIcon} className="place__icon" />
					<div className="place__meta">
						<h2 className="place__title">{place.name}</h2>
						<p className="place__region">{place.region.label}</p>
						<Rating fixed rating={place.rating} />
					</div>
				</header>
				<section className="place__body">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</section>
				<Button
					classNames="btn btn--delete btn--icon"
					label="Verwijderen"
					icon={deleteIcon}
				/>
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
