/* @flow */

/**
 * 404
 */
import NotFound from './404';

/**
 * 500
 */
import InternalServerError from './500';

/**
 * Login
 */
import asyncLogin from './Login';

/**
 * Hall Of Fame
 */
import asyncHallOfFame from './HallOfFame';

/**
 * Fame Detail
 */
import asyncFameDetail from './FameDetail';

export {
  NotFound,
  InternalServerError,
  asyncLogin,
  asyncHallOfFame,
  asyncFameDetail
};
