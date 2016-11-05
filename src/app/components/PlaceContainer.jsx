import React from 'react';
import { connect } from 'react-redux';

export class PlaceContainer extends React.Component {
	render() {
		const place = this.props.places.places[this.props.routeParams.id];
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
};

export default connect(state => ({
	places: state.places,
}))(PlaceContainer);
