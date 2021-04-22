import { call, fork, put, take, takeLatest } from 'redux-saga/effects';

import { USERS } from '../constants';
import {
  setUsers,
  setError,
  addUser,
  setAddUser,
} from '../actions/usersActions';
import { get, requestNewUser } from '../api';

export function* handleUsersLoad(payload) {
  console.log('GET handler', payload);
  try {
    const users = yield call(get, 'https://reqres.in/api/users');
    yield put(setUsers(users));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

// new user handler
export function* handleNewUser(payload) {
  console.log('SET handler', payload.payload);
  try {
    const response = yield call(requestNewUser(payload.payload));
    console.log('Handler response');
    // const { status } = response;
    // yield put(setAddUser(status));
  } catch (error) {
    console.log(error);
  }
}

export function* usersLoad(action) {
  console.log('GET watcher', action);
  const payload = yield take(USERS.LOAD);
  yield fork(handleUsersLoad, payload);
}
//new user watcher
export default function* userNew(action) {
  console.log('SET watcher', action);
  const payload = yield take(USERS.ADD_USER);
  yield fork(handleNewUser, payload);
}
