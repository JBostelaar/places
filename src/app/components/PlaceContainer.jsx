import React from 'react';
import { connect } from 'react-redux';

export class PlaceContainer extends React.Component {
	render() {
		const place = this.props.places.places.find(place => place.name === this.props.routeParams.name);
		return (
			<article>
				<h3>{place.name}</h3>
				<p>{place.region.label}</p>
				<p>{place.rating} <img src="/img/fire.svg" /></p>
			</article>
		);
	}
}

export default connect(state => ({
	places: state.places,
}))(PlaceContainer);
