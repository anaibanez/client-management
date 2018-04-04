import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { unflatten } from 'flat';

import fetchApiSaga from '../../App/fetchSaga';
import { createClient } from '../../../api/client';
import { CLIENT_CREATE_FETCH_KEY } from '../../App/fetchConstants';

export default function* updateClientData({ clientToUpdate }) {
  const response = yield call(fetchApiSaga, createClient, CLIENT_CREATE_FETCH_KEY, unflatten(clientToUpdate));
  if (response.isBackendError !== true) {
    yield put(push('/clients'));
  }
}
