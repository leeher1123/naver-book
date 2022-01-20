import { combineReducers } from 'redux';

import homeReducer from '../views/home/redux/reducer';

const reducers = combineReducers({
  home: homeReducer,
});

export default reducers;
