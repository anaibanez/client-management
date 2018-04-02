import { createSelector } from 'reselect';

const selectDetail = (state) => state.clientDetail;

const getClientDetail = () => createSelector(
  selectDetail,
  (state) => state.clientDetail
);


export {
  getClientDetail,
};
