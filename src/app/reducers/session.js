import * as c from 'app/constants';

export const initialState = {
	token: null,
};

export default function sessionReducer(state = initialState, action) {
	if (action.type === c.SET_SESSION_TOKEN) {
		return {
			...state,
			token: action.token,
		};
	}

	return state;
}
