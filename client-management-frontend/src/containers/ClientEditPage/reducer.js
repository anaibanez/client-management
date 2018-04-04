import { SET_CLIENT, CHANGE_FIELD, CLEAR_FIELDS } from './constants';

const defaultState = {
  clientUpdate: {},
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_CLIENT:
      return {
        ...state,
        clientUpdate: {
          ...payload,
        },
      };
    case CHANGE_FIELD:
      return {
        ...state,
        clientUpdate: {
          ...state.clientUpdate,
          ...payload,
        },
      };
    case CLEAR_FIELDS:
      return { ...defaultState };
    default:
      return state;
  }
};
