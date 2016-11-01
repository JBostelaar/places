import * as c from 'app/constants';

export function updateUser(user) {
	return { type: c.UPDATE_USER, payload: user };
}
