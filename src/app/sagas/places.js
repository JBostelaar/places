import * as c from 'app/constants';
import { browserHistory as history } from 'react-router';
import { takeEvery } from 'redux-saga';
import { fork, put, select } from 'redux-saga/effects';
import { firebaseDb } from 'app/utils/firebase';
import { addPlaceSuccess, addPlaceFailed,
	fetchPlacesSuccess, fetchPlacesFailed,
	deletePlaceSuccess, deletePlaceFailed,
	updatePlaceSuccess, updatePlaceFailed } from 'app/actions/places';
import 'babel-polyfill';

function* addPlace(action) {
	try {
		const uid = yield select(state => state.auth.uid);
		const newPlaceKey = firebaseDb.ref().child('places').push().key;
		const updates = { [`/user-places/${uid}/${newPlaceKey}`]: action.payload };
		yield firebaseDb.ref().update(updates);

		const newPlace = { [newPlaceKey]: action.payload };
		newPlace[newPlaceKey].id = newPlaceKey;
		yield put(addPlaceSuccess(newPlace));

		yield history.push('/');
	} catch (error) {
		yield put(addPlaceFailed(error));
	}
}

function* updatePlace(action) {
	try {
		const uid = yield select(state => state.auth.uid);
		const updates = { [`/user-places/${uid}/${action.payload.id}`]: action.payload };
		yield firebaseDb.ref().update(updates);
		yield put(updatePlaceSuccess(action.payload));
	} catch (error) {
		yield put(updatePlaceFailed(error));
	}
}

function* deletePlace(action) {
	try {
		const uid = yield select(state => state.auth.uid);
		yield firebaseDb.ref(`/user-places/${uid}`).child(action.payload).remove();
		yield history.push('/');
		yield put(deletePlaceSuccess(action.payload));
	} catch (error) {
		yield put(deletePlaceFailed(error));
	}
}

function* fetchPlaces() {
	try {
		const uid = yield select(state => state.auth.uid);
		const places = yield firebaseDb.ref(`/user-places/${uid}`).once('value');
		yield put(fetchPlacesSuccess(places.val()));
	} catch (error) {
		yield put(fetchPlacesFailed(error));
	}
}

// WATCHERS
function* watchAddPlace() {
	yield* takeEvery(c.ADD_PLACE, addPlace);
}

function* watchDeletePlace() {
	yield* takeEvery(c.DELETE_PLACE, deletePlace);
}

function* watchUpdatePlaces() {
	yield* takeEvery(c.UPDATE_PLACE, updatePlace);
}

function* watchFetchPlaces() {
	yield* takeEvery(c.FETCH_PLACES, fetchPlaces);
}

// AUTH SAGAS
export const placesSagas = [
	fork(watchAddPlace),
	fork(watchDeletePlace),
	fork(watchFetchPlaces),
	fork(watchUpdatePlaces),
];
