import * as c from '../constants';

export const initialState = {
	authenticated: false,
	uid: null,
	user: null,
};

export default function authReducer(state = initialState, action) {
	if (action.type === c.AUTH_SIGNIN_SUCCESS) {
		const { payload } = action;

		return {
			...state,
			authenticated: true,
			uid: payload.uid,
			user: payload,
		};
	}

	if (action.type === c.AUTH_SIGNOUT_SUCCESS) {
		return {
			...state,
			authenticated: false,
			uid: null,
			user: null,
		};
	}

	return state;
}
