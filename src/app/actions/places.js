import * as c from 'app/constants';

export function addPlace(place) {
	return { type: c.ADD_PLACE, payload: place };
}
