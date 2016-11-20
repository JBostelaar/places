import React from 'react';
import Icon from 'app/components/elements/Icon';
import navigationIcon from 'app/images/navigation.svg';
import Rating from 'app/components/elements/Rating';

const PlaceHeader = ({ place, openOptions }) => (
	<header className="place__header" >
		<h2 className="place__title">{place.name}</h2>
		<p className="place__region">{place.region.label}</p>
		<Rating fixed rating={place.rating} />
		<Icon
			svg={navigationIcon}
			className="place__navigation"
			onClick={openOptions}
		/>
	</header>
);

PlaceHeader.propTypes = {
	place: React.PropTypes.object,
	openOptions: React.PropTypes.func,
};

export default PlaceHeader;
