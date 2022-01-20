import { fork, all } from 'redux-saga/effects';

import axios from 'axios';

import homeSaga from '../views/home/redux/saga';

axios.defaults.baseURL = 'http://localhost:3065';

function* sagas() {
  yield all([
    fork(homeSaga),
  ]);
}

export default sagas;
