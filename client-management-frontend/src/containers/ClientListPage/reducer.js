import { SET_DATA_TABLE, RESET_TABLE, SET_CURRENT_SORT, DELETE_CLIENT } from './constants';

const initialState = {
  data: [],
};

const setData = (state, payload) => ({
  ...state,
  data: payload,
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA_TABLE:
      return setData(state, payload);
    case RESET_TABLE:
      return initialState;
    case SET_CURRENT_SORT:
      return {
        ...state,
        currentSort: payload,
      };
    case DELETE_CLIENT:
      return {
        ...state,
        currentSort: payload,
      };
    default:
      return state;
  }
};

