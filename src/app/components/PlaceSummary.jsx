import React from 'react';
import { Link } from 'react-router';

export default function PlaceSummary({ place }) {
	return (
		<article className="place">
			<Link to={`places/${place.id}`}>
				<div className="place__category">
					<img src="/img/food.svg" />
				</div>
				<div className="place__meta">
					<h3 className="place__title">{place.name}</h3>
					<span className="place__region">{place.region.label}</span>
				</div>
				<div className="place__rating">
					{place.visited ? (
						<span className="place__score">{place.rating} <img src="/img/fire.svg" /></span>
					) : (
						<span className="place__no-score"></span>
					)}

				</div>
			</Link>
		</article>
	);
}

PlaceSummary.propTypes = {
	place: React.PropTypes.object,
};
