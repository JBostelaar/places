import * as c from 'app/constants';

export const initialState = {
	logged_in: false,
	id: null,
	fullName: null,
	email: null,
	image: null,
};

export default function userReducer(state = initialState, action) {
	if (action.type === c.UPDATE_USER) {
		const { payload } = action;

		if (payload.logged_in === false) return initialState;

		return {
			...state,
			logged_in: true,
			id: payload.uid,
			fullName: payload.displayName,
			email: payload.email,
			image: payload.photoURL,
		};
	}

	return state;
}
