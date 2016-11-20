import React from 'react';
import { connect } from 'react-redux';
import PlaceOptions from 'app/components/Places/PlaceOptions';
import { hideModal } from 'app/actions/modal';

const MODAL_COMPONENTS = {
	PLACE_OPTIONS: PlaceOptions,
};

const ModalContainer = ({ modalType, modalProps, hideModal }) => {
	if (!modalType) return null;

	const SpecificModal = MODAL_COMPONENTS[modalType];
	return <SpecificModal hideModal={hideModal} {...modalProps} />;
};

export default connect(state => state.modal, { hideModal })(ModalContainer);
