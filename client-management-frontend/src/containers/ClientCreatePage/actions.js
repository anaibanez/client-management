import { CHANGE_FIELD, CREATE_CLIENT, CLEAR_FIELDS } from './constants';

export const changeField = (field) => ({
  type: CHANGE_FIELD,
  payload: field,
});

export const createClient = (clientToUpdate) => ({
  type: CREATE_CLIENT,
  clientToUpdate,
});

export const clearFields = () => ({
  type: CLEAR_FIELDS,
});
