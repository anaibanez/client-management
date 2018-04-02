import { createSelector } from 'reselect';

const selectApp = (state) => state.global;

const makeSelect = (attribute) => createSelector(
  selectApp,
  (appState) => appState[attribute]
);

const getUser = () => createSelector(
  selectApp,
  (state) => state.user.user
);

const getModalOptions = () => makeSelect('modal');
const getFetch = () => makeSelect('fetch');

export {
  selectApp,
  getUser,
  getModalOptions,
  getFetch,
};
