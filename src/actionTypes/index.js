/* @flow */
import { flattener, single, promise } from './lib';

export default flattener([
  // SINGLE
  single('single_action'),

  /**
   * PROMISE -> Second arguments guide
   * c: CREATE
   * l: LOAD
   * a: LOAD_ALL
   * u: UPDATE
   * d: DELETE
   */
  promise('login', 'c'), // WILL CREATE ==> CREATE_LOGIN
  promise('logout', 'c'), // WILL CREATE ==> CREATE_LOGOUT
  promise('fames', 'la')  // WILL CREATE ==> LOAD_ALL_FAMES
]);
