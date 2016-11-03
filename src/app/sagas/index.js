import { authSagas } from 'app/sagas/auth';
import { placesSagas } from 'app/sagas/places';

export default function* sagas() {
	yield [
		...authSagas,
		...placesSagas,
	];
}
