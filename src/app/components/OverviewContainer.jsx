import React from 'react';
import PlaceSummary from 'app/components/PlaceSummary';
import OverviewFilter from 'app/components/OverviewFilter';
import { addPlace } from 'app/actions/places';
import { connect } from 'react-redux';
import * as firebase from 'firebase';

export class OverviewContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			activeList: 'all',
		};

		this.changeList = this.changeList.bind(this);
	}

	componentWillMount() {
		firebase.database().ref(`/user-places/${this.props.user.id}`)
		.once('value').then(snapshot => {
			const places = snapshot.val();

			this.props.addPlace({ places });
		});
	}

	changeList(activeList) {
		this.setState({ activeList });
	}

	render() {
		const { places } = this.props;

		if (!places.places) return;
		let array = Object.keys(places.places).map((p) => places.places[p]);

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
	user: state.user,
}), { addPlace })(OverviewContainer);
