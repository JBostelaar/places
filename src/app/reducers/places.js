import * as c from 'app/constants';

export const initialState = {
	places: {},
};

export default function placesReducer(state = initialState, action) {
	if (action.type === c.ADD_PLACE) {
		const places = {
			...state.places,
			...action.payload.places,
		};

		return { places };
	}

	return state;
}
