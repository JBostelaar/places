import React from 'react';
import { Link } from 'react-router';
import Icon from 'app/components/elements/Icon';
import fireIcon from 'app/images/fire.svg';

const PlaceSummary = ({ place }) => (
	<article className="place-summary">
		<Link to={`places/${place.id}`}>
			<div className="place-summary__meta">
				<h3 className="place-summary__title">{place.name}</h3>
				<span className="place-summary__region">{place.region.label}</span>
			</div>
			<div className="place-summary__rating">
				{place.visited ? (
					<span className="place-summary__score">
						{place.rating}
						<Icon svg={fireIcon} className="place-summary__icon" />
					</span>
					) : (
					<span className="place-summary__no-score"></span>
				)}
			</div>
		</Link>
	</article>
);

PlaceSummary.propTypes = {
	place: React.PropTypes.object,
};

export default PlaceSummary;
