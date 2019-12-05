import ActionTypes from '../actionTypes';

export function create(data: Object) {
  return {
    types: ActionTypes.CREATE_LOGIN,
    method: 'post',
    url: '/login',
    data
  };
}
