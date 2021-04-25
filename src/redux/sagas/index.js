import { all } from 'redux-saga/effects';

import usersSaga from './usersSagas';
import newUserSaga from './newUserSaga';

export default function* rootSaga() {
  yield all([usersSaga(), newUserSaga()]);
}
