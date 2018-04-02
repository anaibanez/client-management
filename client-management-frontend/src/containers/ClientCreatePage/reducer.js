import { CHANGE_FIELD, CLEAR_FIELDS } from './constants';

const defaultState = {
  clientCreate: {},
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_FIELD:
      return {
        ...state,
        clientCreate: {
          ...state.clientCreate,
          ...payload,
        },
      };
    case CLEAR_FIELDS:
      return { ...defaultState };
    default:
      return state;
  }
};
