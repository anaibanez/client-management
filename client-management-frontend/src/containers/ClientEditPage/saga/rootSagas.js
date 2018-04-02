import { takeLatest } from 'redux-saga/effects';

import { GET_CLIENT, UPDATE_CLIENT } from '../constants';
import getClient from './getClientSaga';
import updateData from './updateSaga';

export default function* clientDetailSaga() {
  yield takeLatest(GET_CLIENT, getClient);
  yield takeLatest(UPDATE_CLIENT, updateData);
}
