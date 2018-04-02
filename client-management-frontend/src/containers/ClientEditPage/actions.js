import { GET_CLIENT, SET_CLIENT, CHANGE_FIELD, CLEAR_FIELDS, UPDATE_CLIENT } from './constants';

export const setClient = (client) => ({
  type: SET_CLIENT,
  payload: client,
});

export const getClient = (id) => ({
  type: GET_CLIENT,
  payload: id,
});

export const changeField = (field) => ({
  type: CHANGE_FIELD,
  payload: field,
});

export const clearFields = () => ({
  type: CLEAR_FIELDS,
});

export const updateClient = (clientToUpdate) => ({
  type: UPDATE_CLIENT,
  clientToUpdate,
});
