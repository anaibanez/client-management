import { createSelector } from 'reselect';

const selectClientUpdate = (state) => state.clientUpdate;

const getClientUpdate = () => createSelector(
  selectClientUpdate,
  (state) => state.clientUpdate
);

export {
  getClientUpdate,
};
