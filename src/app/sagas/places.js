import * as c from 'app/constants';
import { browserHistory as history } from 'react-router';
import { fork, put, take } from 'redux-saga/effects';
import { firebaseDb } from 'app/utils/firebase';
import { addPlaceSuccess, addPlaceFailed,
	fetchPlacesSuccess, fetchPlacesFailed } from 'app/actions/places';
import 'babel-polyfill';

function* addPlace({ place, uid }) {
	try {
		const newPlaceKey = firebaseDb.ref().child('places').push().key;
		const newPlace = { [newPlaceKey]: place };
		const updates = {
			[`/places/${newPlaceKey}`]: place,
			[`/user-places/${uid}/${newPlaceKey}`]: place,
		};

		yield firebaseDb.ref().update(updates);
		yield put(addPlaceSuccess(newPlace));
		yield history.push('/');
	} catch (error) {
		yield put(addPlaceFailed(error));
	}
}

function* fetchPlaces(uid) {
	try {
		const places = yield firebaseDb.ref(`/user-places/${uid}`).once('value');
		yield put(fetchPlacesSuccess(places.val()));
	} catch (error) {
		yield put(fetchPlacesFailed(error));
	}
}

// WATCHERS
function* watchAddPlace() {
	while (true) {
		const { payload } = yield take(c.ADD_PLACE);
		yield fork(addPlace, payload);
	}
}

function* watchFetchPlaces() {
	while (true) {
		const { payload } = yield take(c.FETCH_PLACES);
		yield fork(fetchPlaces, payload);
	}
}

// AUTH SAGAS
export const placesSagas = [
	fork(watchAddPlace),
	fork(watchFetchPlaces),
];
