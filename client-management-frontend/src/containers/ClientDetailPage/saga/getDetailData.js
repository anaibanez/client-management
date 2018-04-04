import { call } from 'redux-saga/effects';

import fetchApiSaga from '../../App/fetchSaga';
import { getClient } from '../../../api/client';
import { setDetail } from '../actions';
import { CLIENT_DETAIL_FETCH_KEY } from '../../App/fetchConstants';

export default function* getDetailData({ payload }) {
  yield call(fetchApiSaga, getClient, CLIENT_DETAIL_FETCH_KEY, payload, setDetail);
}
