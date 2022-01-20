import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import axios from 'axios';

import { Action } from './reducer';

function logInAPI(data) {
  return axios.post('/user/login', data);
}

function* logIn({ data }) {
  try {
    const result = yield call(logInAPI, data);
    console.log(result);
    yield put(Action.Creators.loginSuccess(result));
  } catch (err) {
    console.log(err);
  }
}

function* saga() {
  yield all([
    takeLatest(Action.Types.LOG_IN_REQUEST, logIn),
  ]);
}

export default saga;
