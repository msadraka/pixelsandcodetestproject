// @flow

import ActionTypes from '../actionTypes';

const initialState = {
  all: {
    fetching: null
  },
  detail: {
    fetching: null
  }
};

export default function(state: Object = initialState, action: Object = {}) {
  switch (action.type) {
    /**
     * LOAD_ALL_FAMES
     */
    case ActionTypes.LOAD_ALL_FAMES:
      return {
        ...state,
        all: {
          fetching: true
        }
      };
    case ActionTypes.LOAD_ALL_FAMES_SUCCESS:
      return {
        ...state,
        all: {
          fetching: false,
          data: action.result
        }
      };
    case ActionTypes.LOAD_ALL_FAMES_FAILURE:
      return {
        ...state,
        all: {
          fetching: false,
          error: action.error
        }
      };

      /**
     * LOAD_ALL_FAMES
     */
    case ActionTypes.LOAD_FAMES:
      return {
        ...state,
        detail: {
          fetching: true
        }
      };
    case ActionTypes.LOAD_FAMES_SUCCESS:
      return {
        ...state,
        detail: {
          fetching: false,
          data: action.result
        }
      };
    case ActionTypes.LOAD_FAMES_FAILURE:
      return {
        ...state,
        detail: {
          fetching: false,
          error: action.error
        }
      };

    default:
      return state;
  }
}
