import React from 'react';
import PlaceSummary from 'app/components/PlaceSummary';
import OverviewFilter from 'app/components/OverviewFilter';
import Loader from 'app/components/Loader';
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

	componentDidMount() {
		this.props.fetchPlaces(this.props.user.uid);
	}

	changeList(activeList) {
		this.setState({ activeList });
	}

	render() {
		const { places } = this.props;
		const { activeList } = this.state;

		if (!places) return <Loader />;
		let array = Object.keys(places).map((p) => places[p]);

		if (activeList === 'togo') {
			array = array.filter(place => !place.visited);
		}

		return (
			<div className="overview">
				<OverviewFilter changeList={this.changeList} activeList={activeList} />
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
	places: state.places.places,
	user: state.auth.user,
}), { fetchPlaces })(OverviewContainer);
