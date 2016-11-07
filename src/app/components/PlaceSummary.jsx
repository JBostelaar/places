import React from 'react';
import { Link } from 'react-router';

export default function PlaceSummary({ place }) {
	return (
		<article className="place-summary">
			<Link to={`places/${place.id}`}>
				<div className="place-summary__category">
					<img src="/img/food.svg" />
				</div>
				<div className="place-summary__meta">
					<h3 className="place-summary__title">{place.name}</h3>
					<span className="place-summary__region">{place.region.label}</span>
				</div>
				<div className="place-summary__rating">
					{place.visited ? (
						<span className="place-summary__score">{place.rating} <img src="/img/fire.svg" /></span>
					) : (
						<span className="place-summary__no-score"></span>
					)}
				</div>
			</Link>
		</article>
	);
}

PlaceSummary.propTypes = {
	place: React.PropTypes.object,
};
