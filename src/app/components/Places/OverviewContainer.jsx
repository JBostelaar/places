import React from 'react';
import PlaceSummary from 'app/components/Places/PlaceSummary';
import OverviewFilter from 'app/components/Places/OverviewFilter';
import Loader from 'app/components/elements/Loader';
import { fetchPlaces } from 'app/actions/places';
import { connect } from 'react-redux';

export class OverviewContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			activeList: 'all',
		};

		this.changeList = this.changeList.bind(this);
	}

	componentWillMount() {
		if (this.props.places) return;
		this.props.fetchPlaces();
	}

	changeList(activeList) {
		this.setState({ activeList });
	}

	render() {
		const { places } = this.props;
		const { activeList } = this.state;

		if (!places) return <Loader />;
		let array = Object.keys(places).map(p => places[p]);

		if (activeList === 'togo') {
			array = array.filter(place => !place.visited);
		}

		return (
			<div className="overview">
				<OverviewFilter changeList={this.changeList} activeList={activeList} />
				<section className="places">
					{array.length ? array.map(place => (
						<PlaceSummary place={place} key={place.id} />
					)) : (
						<p>Geen places.</p>
					)}
				</section>
			</div>
		);
	}
}

OverviewContainer.propTypes = {
	places: React.PropTypes.object,
	user: React.PropTypes.object,
	fetchPlaces: React.PropTypes.func,
};

export default connect(state => ({
	places: state.places.places,
	user: state.auth.user,
}), { fetchPlaces })(OverviewContainer);
