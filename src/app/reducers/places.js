import * as c from 'app/constants';

export const initialState = {
	places: null,
};

export default function placesReducer(state = initialState, action) {
	if (action.type === c.FETCH_PLACES_SUCCESS) {
		Object.keys(action.payload).map(id => (
			action.payload[id].id = id
		));

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

	if (action.type === c.UPDATE_PLACE_SUCCESS) {
		const places = {
			...state.places,
			[action.payload.id]: {
				...action.payload,
			},
		};
		return { places };
	}

	if (action.type === c.DELETE_PLACE_SUCCESS) {
		delete state.places[action.payload];
		const places = {
			...state.places,
		};
		return { places };
	}

	if (action.type === c.CLEAR_PLACES) {
		return initialState;
	}

	return state;
}
