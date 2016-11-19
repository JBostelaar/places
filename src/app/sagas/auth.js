import * as c from 'app/constants';
import { browserHistory as history } from 'react-router';
import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import { firebaseAuth } from 'app/utils/firebase';
import { signInSuccess, signInFailed, signOutSuccess, signOutFailed } from 'app/actions/auth';
import { clearPlaces } from 'app/actions/places';
import 'babel-polyfill';

function* signIn(action) {
	try {
		const authData = yield call([firebaseAuth, firebaseAuth.signInWithPopup], action.payload);
		yield put(signInSuccess(authData.user));
		yield history.push('/');
	} catch (error) {
		yield put(signInFailed(error));
	}
}

function* signOut() {
	try {
		yield call([firebaseAuth, firebaseAuth.signOut]);
		yield put(signOutSuccess());
		yield put(clearPlaces());
		yield history.replace('/login');
	} catch (error) {
		yield put(signOutFailed(error));
	}
}

// WATCHERS
function* watchSignIn() {
	yield* takeEvery(c.AUTH_SIGNIN, signIn);
}

function* watchSignOut() {
	yield* takeEvery(c.AUTH_SIGNOUT, signOut);
}

// AUTH SAGAS
export const authSagas = [
	fork(watchSignIn),
	fork(watchSignOut),
];
