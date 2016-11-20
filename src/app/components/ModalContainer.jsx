import React from 'react';
import { connect } from 'react-redux';
import PlaceOptions from 'app/components/Places/PlaceOptions';
import PlaceRating from 'app/components/Places/PlaceRating';
import { hideModal } from 'app/actions/modal';

const MODAL_COMPONENTS = {
	PLACE_OPTIONS: PlaceOptions,
	PLACE_RATING: PlaceRating,
};

const ModalContainer = ({ modalType, modalProps, hideModal }) => {
	if (!modalType) return null;

	const SpecificModal = MODAL_COMPONENTS[modalType];
	return <SpecificModal hideModal={hideModal} {...modalProps} />;
};

ModalContainer.propTypes = {
	modalType: React.PropTypes.string,
	modalProps: React.PropTypes.object,
	hideModal: React.PropTypes.func,
};

export default connect(state => state.modal, { hideModal })(ModalContainer);
