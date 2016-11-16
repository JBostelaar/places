import { firebaseAuth } from './firebase';
import { signInSuccess } from '../actions/auth';

export function initAuth(dispatch) {
	return new Promise((resolve, reject) => {
		const unsubscribe = firebaseAuth.onAuthStateChanged(
			authUser => {
				if (authUser) dispatch(signInSuccess(authUser));
				resolve();
				unsubscribe();
			},
			error => reject(error)
		);
	});
}
