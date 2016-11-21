import React from 'react';
import { connect } from 'react-redux';
import { addPlace } from 'app/actions/places';
import Input from 'app/components/elements/Input';
import Rating from 'app/components/elements/Rating';
import SelectRegion from 'app/components/elements/SelectRegion';
import Toggle from 'app/components/elements/Toggle';
import regions from 'app/utils/regions';

export class AddPlaceContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			visited: false,
			region: null,
		};

		this.addPlace = this.addPlace.bind(this);
		this.toggleVisited = this.toggleVisited.bind(this);
		this.selectRegion = this.selectRegion.bind(this);
	}

	toggleVisited() {
		this.setState({ visited: !this.state.visited });
	}

	selectRegion(region) {
		this.setState({ region });
	}

	addPlace(e) {
		e.preventDefault();

		this.props.addPlace({
			name: this.refs.name.state.value,
			region: regions.find(reg => reg.name === this.state.region),
			rating: this.refs.rating ? this.refs.rating.state.value : 0,
			visited: this.state.visited,
		});
	}

	render() {
		const { region, visited } = this.state;
		return (
			<section className="add-place">
				<form onSubmit={this.addPlace}>
					<Input name="name" type="text" label="Naam" />
					<SelectRegion options={regions} value={region} onClick={this.selectRegion} />
					<Toggle onChange={this.toggleVisited} label="Bezocht" value={visited} />
					{visited ? (
						<Rating ref="rating" />
					) : null}
					<button type="submit" className="add-place__submit">Toevoegen</button>
				</form>
			</section>
		);
	}
}

export default connect(null, { addPlace })(AddPlaceContainer);

AddPlaceContainer.propTypes = {
	addPlace: React.PropTypes.func,
};
