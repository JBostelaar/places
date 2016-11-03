import * as c from 'app/constants';

export const initialState = {
	places: null,
};

export default function placesReducer(state = initialState, action) {
	if (action.type === c.FETCH_PLACES_SUCCESS) {
		const places = {
			...action.payload,
		};
		return { places };
	}

	if (action.type === c.ADD_PLACE_SUCCESS) {
		const places = {
			...state.places,
			...action.payload,
		};
		return { places };
	}

	return state;
}
