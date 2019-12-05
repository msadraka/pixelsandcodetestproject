// @flow

import ActionTypes from '../actionTypes';

const initialState = {
  all: {
    fetching: null
  }
};

export default function(state: Object = initialState, action: Object = {}) {
  switch (action.type) {
    /**
     * CREATE_LOGIN
     */
    case ActionTypes.CREATE_LOGIN:
      return {
        ...state,
        all: {
          fetching: true
        }
      };
    case ActionTypes.CREATE_LOGIN_SUCCESS:
      return {
        ...state,
        all: {
          fetching: false,
          data: action.result
        }
      };
    case ActionTypes.CREATE_LOGIN_FAILURE:
      return {
        ...state,
        all: {
          fetching: false,
          error: action.error
        }
      };

    default:
      return state;
  }
}
