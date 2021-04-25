import { call, fork, put, take } from 'redux-saga/effects';

import { USERS } from '../constants';
import { setUsers, setError } from '../actions/usersActions';
import { get } from '../api';

//get users handler
export function* handleUsersLoad(payload) {
  console.log('GET handler', payload);
  try {
    const users = yield call(get, 'https://reqres.in/api/users');
    yield put(setUsers(users));
  } catch (error) {
    console.log('GET Handler error', error);
    yield put(setError(error.toString()));
  }
}

//get users watcher
export default function* usersLoad() {
  console.log('GET watcher');
  const payload = yield take(USERS.LOAD);
  yield fork(handleUsersLoad, payload);
}
