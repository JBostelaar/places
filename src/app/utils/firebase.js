import firebase from 'firebase';

export default function initFirebase() {
	firebase.initializeApp({
		apiKey: 'AIzaSyB8etvqGhpCJGMdny770rIHhJ2oGarY8U4',
		authDomain: 'places-1476985951179.firebaseapp.com',
		databaseURL: 'https://places-1476985951179.firebaseio.com',
		storageBucket: 'places-1476985951179.appspot.com',
		messagingSenderId: '1034883165540',
	});
}
