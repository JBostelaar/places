import React from 'react';
import Input from 'app/components/Input';
import SelectRegion from 'app/components/SelectRegion';
import { connect } from 'react-redux';
import { addPlace } from 'app/actions/places';

export class AddPlaceContainer extends React.Component {
	static contextTypes = {
		router: React.PropTypes.object.isRequired,
	};

	constructor() {
		super();

		this.state = {
			name: '',
			region: '',
		};

		this.regions = [
			{
				name: 'centrum',
				label: 'Centrum',
			},
			{
				name: 'oost',
				label: 'Oost',
			},
			{
				name: 'zuid',
				label: 'Zuid',
			},
			{
				name: 'west',
				label: 'West',
			},
		];


		this.addPlace = this.addPlace.bind(this);
	}

	addPlace() {
		const region = this.regions.filter(reg => (
			reg.name === this.refs.region.state.value
		))[0];

		const place = {
			name: this.refs.name.state.value,
			region,
			rating: 4,
			visited: false,
		};

		this.props.addPlace(place);
		this.context.router.push('/');
	}

	render() {
		return (
			<section className="add-place">
				<Input name="name" type="text" ref="name" label="Naam" />
				<SelectRegion name="region" options={this.regions} ref="region" />
				<button type="submit" className="add-place__submit" onClick={this.addPlace}>Toevoegen</button>
			</section>
		);
	}
}

export default connect(null, { addPlace })(AddPlaceContainer);
