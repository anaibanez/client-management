import { takeLatest } from 'redux-saga/effects';

import { GET_DETAIL } from '../constants';
import getDetailData from './getDetailData';

export default function* clientDetailSaga() {
  yield takeLatest(GET_DETAIL, getDetailData);
}
