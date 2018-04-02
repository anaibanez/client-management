import { GET_DATA_TABLE, SET_DATA_TABLE, SET_CURRENT_SORT, RESET_TABLE, DELETE_CLIENT } from './constants';

export const getDataTable = () => ({
  type: GET_DATA_TABLE,
});

export const setDataTable = (clients) => ({
  type: SET_DATA_TABLE,
  payload: clients,
});

export const setCurrentSort = (currentSort) => ({
  type: SET_CURRENT_SORT,
  payload: currentSort,
});

export const resetTable = () => ({
  type: RESET_TABLE,
});

export const deleteClient = (id) => ({
  type: DELETE_CLIENT,
  id,
});
