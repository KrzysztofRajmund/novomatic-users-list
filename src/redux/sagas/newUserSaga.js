import { call, fork, put, take } from 'redux-saga/effects';

import { USERS } from '../constants';
import { setError, setAddUser, setMessage } from '../actions/usersActions';
import { requestNewUser } from '../api';
// new user handler
export function* handleNewUser(payload) {
  try {
    const response = yield call(requestNewUser, payload.payload);
    yield put(setAddUser(response.data));
    yield put(
      setMessage(
        'Thank you, your submission is pending and will appear after validation.'
      )
    );
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

//new user watcher
export default function* userNew() {
  const payload = yield take(USERS.ADD_USER);
  yield fork(handleNewUser, payload);
}
