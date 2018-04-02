import { createSelector } from 'reselect';

const selectList = (state) => state.clientList;

const selectGlobal = (state) => state.global;

const getData = () => createSelector(
  selectList,
  (state) => state.data
);

const getFetch = () => createSelector(
  selectGlobal,
  (state) => state.fetch
);


export {
  getData,
  getFetch,
};
