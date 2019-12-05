import ActionTypes from '../actionTypes';

export function loadAll(data: Object) {

  console.log(data);
  return {
    types: ActionTypes.LOAD_ALL_FAMES,
    method: 'get',
    url: '/fames/?guest=true',
    data
  };
}

export function load(id: string) {

  console.log(id);
  return {
    types: ActionTypes.LOAD_FAMES,
    method: 'get',
    url: `/fames/${id}?guest=true`
  };
}
