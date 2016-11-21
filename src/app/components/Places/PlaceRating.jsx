import React from 'react';
import { connect } from 'react-redux';
import { updatePlace } from 'app/actions/places';
import Modal from 'react-modal';
import Rating from 'app/components/elements/Rating';
import Button from 'app/components/elements/Button';

class PlaceRating extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			rating: props.place.rating,
		};

		this.handleChange = this.handleChange.bind(this);
		this.setRating = this.setRating.bind(this);
	}

	setRating() {
		const place = {
			...this.props.place,
			rating: this.state.rating,
			visited: true,
		};

		this.props.updatePlace(place);
		this.props.hideModal();
	}

	handleChange(rating) {
		this.setState({ rating });
	}

	render() {
		return (
			<Modal
				isOpen
				onRequestClose={this.props.hideModal}
				className="modal fade"
				overlayClassName="modal-backdrop modal-backdrop--center"
			>
				<div className="rating-modal">
					<Rating value={this.state.rating} handleChange={this.handleChange} />
					<div className="rating-modal__buttons">
						<Button label="Annuleren" onClick={this.props.hideModal} />
						<Button label="Bevestigen" className="btn" onClick={this.setRating} />
					</div>
				</div>
			</Modal>
		);
	}
}

PlaceRating.propTypes = {
	hideModal: React.PropTypes.func,
	updatePlace: React.PropTypes.func,
	place: React.PropTypes.object,
};

export default connect(null, { updatePlace })(PlaceRating);
