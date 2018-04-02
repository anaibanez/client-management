import { SET_DETAIL } from './constants';

const defaultState = {
  clientDetail: {},
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_DETAIL:
      return {
        ...state,
        clientDetail: payload,
      };
    default:
      return state;
  }
};
