import { call, put } from 'redux-saga/effects';

import { getDataTable } from '../actions';
import fetchApiSaga from '../../App/fetchSaga';
import { deleteClient } from '../../../api/client';
import { CLIENTS_FETCH_KEY } from '../../App/fetchConstants';

export default function* deleteClientSaga({ id }) {
  const response = yield call(fetchApiSaga, deleteClient, CLIENTS_FETCH_KEY, id);
  if (response.isBackendError !== true) {
    yield (put(getDataTable()));
  }
}
