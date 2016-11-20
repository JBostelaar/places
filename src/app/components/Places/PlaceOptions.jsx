import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { deletePlace } from 'app/actions/places';
import deleteIcon from 'app/images/delete.svg';
import editIcon from 'app/images/edit.svg';
import Button from 'app/components/elements/Button';

class PlaceOptions extends React.Component {
	constructor() {
		super();

		this.editPlace = this.editPlace.bind(this);
		this.deletePlace = this.deletePlace.bind(this);
	}

	editPlace() {
		// TODO: Fix EditPlace function
		console.info('edit place');
	}

	deletePlace() {
		this.props.deletePlace(this.props.id);
		this.props.hideModal();
	}

	render() {
		return (
			<Modal
				isOpen
				onRequestClose={this.props.hideModal}
				className="modal"
				overlayClassName="modal-backdrop"
			>
				<section className="place-options">
					<Button
						classNames="btn btn--inverted btn--icon"
						label="Bewerken"
						icon={editIcon}
						onClick={this.editPlace}
					/>
					<Button
						classNames="btn btn--delete btn--icon"
						label="Verwijderen"
						icon={deleteIcon}
						onClick={this.deletePlace}
					/>
				</section>
			</Modal>
		);
	}
}

PlaceOptions.propTypes = {
	hideModal: React.PropTypes.func,
	deletePlace: React.PropTypes.func,
	id: React.PropTypes.string,
};

export default connect(null, { deletePlace })(PlaceOptions);
