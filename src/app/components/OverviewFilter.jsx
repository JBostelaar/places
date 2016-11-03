import React from 'react';
import classNames from 'classnames';

const OverviewFilter = ({ changeList, activeList }) => {
	return (
		<section className="overview-filter">
			<a
				href="#"
				className={classNames('overview-filter__item', {
					'overview-filter__item--active': activeList === 'all',
				})} onClick={() => changeList('all')}
			>All</a>
			<a
				href="#"
				className={classNames('overview-filter__item', {
					'overview-filter__item--active': activeList === 'togo',
				})} onClick={() => changeList('togo')}
			>To Go</a>
		</section>
	);
}

export default OverviewFilter;
