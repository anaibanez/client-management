import { call, put } from 'redux-saga/effects';
import { flatten } from 'flat';

import fetchApiSaga from '../../App/fetchSaga';
import { getClient } from '../../../api/client';
import { clearFields, setClient } from '../actions';
import { CLIENT_FETCH_KEY } from '../../App/fetchConstants';

export default function* getClientData({ payload }) {
  const response = yield call(fetchApiSaga, getClient, CLIENT_FETCH_KEY, payload);
  if (response.isBackendError === true) {
    yield put(clearFields());
  } else {
    yield put(setClient(flatten(response)));
  }
}
