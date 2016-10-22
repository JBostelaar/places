import React from 'react';
import PlaceSummary from 'app/components/PlaceSummary';
import OverviewFilter from 'app/components/OverviewFilter';
import { connect } from 'react-redux';

export class OverviewContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			activeList: 'all',
		};

		this.changeList = this.changeList.bind(this);
	}

	changeList(activeList) {
		this.setState({ activeList });
	}

	render() {
		const { places } = this.props;
		let array = places.places;

		if (this.state.activeList === 'togo') {
			array = array.filter(place => !place.visited);
		}

		return (
			<div className="overview">
				<OverviewFilter changeList={this.changeList} activeList={this.state.activeList} />
				<section className="places">
					{array.length ? array.map(place => (
						<PlaceSummary place={place} key={place.name} />
					)) : (
						<p>Geen places.</p>
					)}
				</section>
			</div>
		);
	}
}

export default connect(state => ({
	places: state.places,
}))(OverviewContainer);
