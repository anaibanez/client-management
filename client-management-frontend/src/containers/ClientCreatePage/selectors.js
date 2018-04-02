import { createSelector } from 'reselect';

export const selectClientUpdate = (state) => state.clientCreate;

const getClientCreate = () => createSelector(
  selectClientUpdate,
  (state) => state.clientCreate
);

export {
  getClientCreate,
};
