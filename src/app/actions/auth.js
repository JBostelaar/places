import * as c from 'app/constants';

export function signIn(authProvider) {
	return { type: c.AUTH_SIGNIN, payload: { authProvider } };
}

export function signInSuccess(user) {
	return { type: c.AUTH_SIGNIN_SUCCESS, payload: user };
}

export function signInFailed(error) {
	return { type: c.AUTH_SIGNIN_FAILED, payload: { error } };
}

export function signOut() {
	return { type: c.AUTH_SIGNOUT };
}

export function signOutSuccess(user) {
	return { type: c.AUTH_SIGNOUT_SUCCESS, payload: { user } };
}

export function signOutFailed(error) {
	return { type: c.AUTH_SIGNOUT_FAILED, payload: { error } };
}
