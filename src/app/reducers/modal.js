import * as c from 'app/constants';

export const initialState = {
	modalType: null,
	modalProps: {},
};

export default function modalReducer(state = initialState, action) {
	if (action.type === c.SHOW_MODAL) {
		return {
			modalType: action.payload.modalType,
			modalProps: action.payload.modalProps,
		};
	}

	if (action.type === c.HIDE_MODAL) {
		return initialState;
	}

	return state;
}
