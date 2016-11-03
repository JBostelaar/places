import * as c from 'app/constants';
import { browserHistory as history } from 'react-router';
import { call, fork, put, take } from 'redux-saga/effects';
import { firebaseAuth } from 'app/utils/firebase';
import { signInSuccess, signInFailed, signOutSuccess, signOutFailed } from 'app/actions/auth';
import 'babel-polyfill';

function* signIn(authProvider) {
	try {
		const authData = yield call([firebaseAuth, firebaseAuth.signInWithPopup], authProvider);
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
		yield history.replace('/login');
	} catch (error) {
		yield put(signOutFailed(error));
	}
}

// WATCHERS
function* watchSignIn() {
	while (true) {
		const { payload } = yield take(c.AUTH_SIGNIN);
		yield fork(signIn, payload.authProvider);
	}
}

function* watchSignOut() {
	while (true) {
		yield take(c.AUTH_SIGNOUT);
		yield fork(signOut);
	}
}

// AUTH SAGAS
export const authSagas = [
	fork(watchSignIn),
	fork(watchSignOut),
];
