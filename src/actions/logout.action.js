import ActionTypes from '../actionTypes';

export function create(data: Object) {
  return {
    types: ActionTypes.CREATE_LOGOUT,
    method: 'post',
    url: '/logout',
    data
  };
}
