import { call, fork, put, take } from 'redux-saga/effects';

import { USERS } from '../constants';
import { setError, setAddUser } from '../actions/usersActions';
import { requestNewUser } from '../api';

// new user handler
export function* handleNewUser(payload) {
  console.log('SET handler', payload.payload);
  try {
    const response = yield call(requestNewUser, payload.payload);
    console.log('Handler response', response);
    yield put(setAddUser(response.data));
  } catch (error) {
    console.log('SET Handler error', error);
    yield put(setError(error.toString()));
  }
}

//new user watcher
export default function* userNew() {
  console.log('SET watcher');
  const payload = yield take(USERS.ADD_USER);
  yield fork(handleNewUser, payload);
}
