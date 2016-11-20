import React from 'react';
import { connect } from 'react-redux';
import { updatePlace } from 'app/actions/places';
import Modal from 'react-modal';
import Rating from 'app/components/elements/Rating';
import Button from 'app/components/elements/Button';

class PlaceRating extends React.Component {
	constructor() {
		super();

		this.setRating = this.setRating.bind(this);
	}

	setRating() {
		const place = {
			...this.props.place,
			rating: this.refs.rating ? this.refs.rating.state.value : 0,
			visited: true,
		};

		this.props.updatePlace(place);
		this.props.hideModal();
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
					<Rating ref="rating" />
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
