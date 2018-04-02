import { SET_DETAIL, GET_DETAIL } from './constants';

export const setDetail = (client) => ({
  type: SET_DETAIL,
  payload: client,
});

export const getDetail = (id) => ({
  type: GET_DETAIL,
  payload: id,
});
