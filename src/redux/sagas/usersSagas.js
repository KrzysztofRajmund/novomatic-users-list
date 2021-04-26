import { call, fork, put, take } from 'redux-saga/effects';

import { USERS } from '../constants';
import { setUsers, setError } from '../actions/usersActions';
import { get } from '../api';

//get users handler
export function* handleUsersLoad(payload) {
  try {
    const users = yield call(get, 'https://reqres.in/api/users');
    yield put(setUsers(users));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

//get users watcher
export default function* usersLoad() {
  const payload = yield take(USERS.LOAD);
  yield fork(handleUsersLoad, payload);
}
