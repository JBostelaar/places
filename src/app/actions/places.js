import * as c from 'app/constants';

export function fetchPlaces() {
	return { type: c.FETCH_PLACES };
}

export function fetchPlacesSuccess(places) {
	return { type: c.FETCH_PLACES_SUCCESS, payload: places };
}

export function fetchPlacesFailed() {
	return { type: c.FETCH_PLACES_FAILED };
}

export function addPlace(place) {
	return { type: c.ADD_PLACE, payload: place };
}

export function addPlaceSuccess(place) {
	return { type: c.ADD_PLACE_SUCCESS, payload: place };
}

export function addPlaceFailed() {
	return { type: c.ADD_PLACE_FAILED };
}

export function updatePlace(place) {
	return { type: c.UPDATE_PLACE, payload: place };
}

export function updatePlaceSuccess(place) {
	return { type: c.UPDATE_PLACE_SUCCESS, payload: place };
}

export function updatePlaceFailed() {
	return { type: c.UPDATE_PLACE_FAILED };
}

export function deletePlace(id) {
	return { type: c.DELETE_PLACE, payload: id };
}

export function deletePlaceSuccess(id) {
	return { type: c.DELETE_PLACE_SUCCESS, payload: id };
}

export function deletePlaceFailed() {
	return { type: c.DELETE_PLACE_FAILED };
}

export function clearPlaces() {
	return { type: c.CLEAR_PLACES };
}
