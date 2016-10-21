import React from 'react';
import PlaceSummary from 'app/components/PlaceSummary';
import OverviewFilter from 'app/components/OverviewFilter';
import { connect } from 'react-redux';

export function OverviewContainer({ places }) {
	return (
		<div className="overview">
			<OverviewFilter />
			<section className="places">
				{places.places.length ? places.places.map(place => (
					<PlaceSummary place={place} key={place.name} />
				)) : (
					<p>Nog geen places.</p>
				)}
			</section>
		</div>
	);
}

export default connect(state => ({
	places: state.places,
}))(OverviewContainer);
