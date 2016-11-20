import React from 'react';
import { connect } from 'react-redux';
import Loader from 'app/components/elements/Loader';
import Button from 'app/components/elements/Button';
import PlaceHeader from 'app/components/Places/PlaceHeader';
import doneIcon from 'app/images/done.svg';
import { fetchPlaces } from 'app/actions/places';
import { showModal } from 'app/actions/modal';

export class PlaceContainer extends React.Component {
	constructor() {
		super();

		this.openOptions = this.openOptions.bind(this);
		this.openRating = this.openRating.bind(this);
	}

	componentWillMount() {
		if (this.props.places) return;
		this.props.fetchPlaces();
	}

	openRating(place) {
		this.props.showModal('PLACE_RATING', { place });
	}

	openOptions() {
		this.props.showModal('PLACE_OPTIONS', { id: this.props.routeParams.id });
	}

	render() {
		const { places, routeParams } = this.props;

		if (!places) return <Loader />;

		const place = places[routeParams.id];
		return (
			<article className="place">
				<PlaceHeader place={place} openOptions={this.openOptions} />
				<footer className="place__footer">
					{!place.visited ? (
						<Button
							className="btn btn--icon" label="Bezocht"
							icon={doneIcon} onClick={() => this.openRating(place)}
						/>
					) : null}
				</footer>
			</article>
		);
	}
}

PlaceContainer.propTypes = {
	places: React.PropTypes.object,
	routeParams: React.PropTypes.object.isRequired,
	fetchPlaces: React.PropTypes.func.isRequired,
	showModal: React.PropTypes.func.isRequired,
};

export default connect(state => ({
	places: state.places.places,
}), { fetchPlaces, showModal })(PlaceContainer);
