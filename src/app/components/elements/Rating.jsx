import React from 'react';
import classNames from 'classnames';
import Icon from 'app/components/elements/Icon';
import fireIcon from 'app/images/fire.svg';
import dfireIcon from 'app/images/d-fire.svg';


const Rating = ({ fixed, value, handleChange }) => {
	const ratings = [];
	for (let i = 0; i < 5; i++) {
		ratings.push(
			<Icon
				svg={(i + 1) <= value ? fireIcon : dfireIcon}
				onClick={!fixed ? () => handleChange(i + 1, 'rating') : null}
				key={i}
			/>
		);
	}

	return (
		<div
			className={classNames('rating-field', {
				'rating-field--fixed': fixed,
			})}
		>
			{!fixed ? (
				<label>Geef een beoordeling</label>
			) : null}
			<div className="rating">
				{ratings}
			</div>
		</div>
	);
};

Rating.propTypes = {
	value: React.PropTypes.number,
	fixed: React.PropTypes.bool,
	handleChange: React.PropTypes.func,
};

export default Rating;
