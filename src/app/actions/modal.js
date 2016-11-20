import * as c from 'app/constants';

export function showModal(modalType, modalProps) {
	return { type: c.SHOW_MODAL, payload: { modalType, modalProps } };
}

export function hideModal() {
	return { type: c.HIDE_MODAL };
}
