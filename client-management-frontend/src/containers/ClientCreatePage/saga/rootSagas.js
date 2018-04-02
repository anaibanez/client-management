import { takeLatest } from 'redux-saga/effects';

import { CREATE_CLIENT } from '../constants';
import createClient from './createClientSaga';

export default function* clientDetailSaga() {
  yield takeLatest(CREATE_CLIENT, createClient);
}
