import React from 'react';
import classNames from 'classnames';

const SelectRegion = ({ options, onClick, value }) => (
	<div className="select-region">
		<label>Wijk</label>
		<div className="select-region__options">
			{options.map(option => (
				<a
					key={option.name} onClick={() => onClick(option.name, 'region')}
					className={classNames({ active: option.name === value })}
				>
					{option.label}
				</a>
			))}
		</div>
	</div>
);

SelectRegion.propTypes = {
	value: React.PropTypes.string,
	options: React.PropTypes.array,
	onClick: React.PropTypes.func,
};

export default SelectRegion;
