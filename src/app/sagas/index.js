import { authSagas } from './auth';
import { placesSagas } from './places';

export default function* sagas() {
	yield [
		...authSagas,
		...placesSagas,
	];
}
