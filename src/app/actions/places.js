import * as c from 'app/constants';

export function fetchPlaces(uid) {
	return { type: c.FETCH_PLACES, payload: uid };
}

export function fetchPlacesSuccess(places) {
	return { type: c.FETCH_PLACES_SUCCESS, payload: places };
}

export function fetchPlacesFailed() {
	return { type: c.FETCH_PLACES_FAILED };
}

export function addPlace(place, uid) {
	return { type: c.ADD_PLACE, payload: { place, uid } };
}

export function addPlaceSuccess(place) {
	return { type: c.ADD_PLACE_SUCCESS, payload: place };
}

export function addPlaceFailed() {
	return { type: c.ADD_PLACE_FAILED };
}
