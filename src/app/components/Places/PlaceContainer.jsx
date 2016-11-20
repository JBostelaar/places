import React from 'react';
import { connect } from 'react-redux';
import Loader from 'app/components/elements/Loader';
import Rating from 'app/components/elements/Rating';
import Icon from 'app/components/elements/Icon';
import navigationIcon from 'app/images/navigation.svg';
import { fetchPlaces } from 'app/actions/places';
import { showModal } from 'app/actions/modal';

export class PlaceContainer extends React.Component {
	constructor() {
		super();

		this.showOptions = this.showOptions.bind(this);
	}

	componentWillMount() {
		if (this.props.places) return;
		this.props.fetchPlaces();
	}

	showOptions() {
		this.props.showModal('PLACE_OPTIONS', { id: this.props.routeParams.id });
	}

	render() {
		const { places, routeParams } = this.props;

		if (!places) return <Loader />;

		const place = places[routeParams.id];
		return (
			<article className="place">
				<header className="place__header" >
					<h2 className="place__title">{place.name}</h2>
					<p className="place__region">{place.region.label}</p>
					<Rating fixed rating={place.rating} />
					<Icon
						svg={navigationIcon}
						className="place__navigation"
						onClick={this.showOptions}
					/>
				</header>
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
	fetchPlaces: React.PropTypes.func.isRequired,
};

export default connect(state => ({
	places: state.places.places,
}), { fetchPlaces, showModal })(PlaceContainer);
