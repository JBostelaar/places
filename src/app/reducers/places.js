import * as c from 'app/constants';

export const initialState = {
	places: [
		{
			name: 'Seafoodbar',
			visited: true,
			region: {
				label: 'Zuid',
				name: 'zuid',
			},
			rating: 4,
		},
		{
			name: 'Cannibale Royale',
			visited: true,
			region: {
				label: 'Centrum',
				name: 'centrum',
			},
			rating: 3,
		},
		{
			name: 'Izakaya',
			visited: false,
			region: {
				label: 'Zuid',
				name: 'zuid',
			},
			rating: null,
		},
	],
};

export default function placesReducer(state = initialState, action) {
	if (action.type === c.ADD_PLACE) {
		const places = state.places;
		places.push(action.payload);

		return { places };
	}

	return state;
}
