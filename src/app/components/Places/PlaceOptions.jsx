import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { deletePlace } from 'app/actions/places';
import deleteIcon from 'app/images/delete.svg';
import editIcon from 'app/images/edit.svg';
import Icon from 'app/components/elements/Icon';

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
				className="modal modal--full"
				overlayClassName="modal-backdrop"
			>
				<section className="place-options">
					<ul className="action-menu">
						<li className="action-menu__item" onClick={this.editPlace}>
							<Icon svg={editIcon} /> Bewerken
						</li>
						<li className="action-menu__item" onClick={this.deletePlace}>
							<Icon svg={deleteIcon} /> Verwijderen
						</li>
						<li
							className="action-menu__item action-menu__dismiss"
							onClick={this.props.hideModal}
						>
							Annuleren
						</li>
					</ul>
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
