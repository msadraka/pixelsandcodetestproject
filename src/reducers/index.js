/* @flow */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';

import fames from './fames.reducer';
import login from './login.reducer';

const reducers = {
  form,
  fames,
  login
};

export type Reducers = typeof reducers;
export default (history: Object) =>
  combineReducers({ router: connectRouter(history), ...reducers });
