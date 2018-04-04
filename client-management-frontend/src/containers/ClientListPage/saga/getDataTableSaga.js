import { call, put } from 'redux-saga/effects';

import { setDataTable, resetTable } from '../actions';
import fetchApiSaga from '../../App/fetchSaga';
import { getClients } from '../../../api/client';
import { CLIENTS_FETCH_KEY } from '../../App/fetchConstants';

export default function* getGeneralData() {
  const response = yield call(fetchApiSaga, getClients, CLIENTS_FETCH_KEY, null, setDataTable);
  if (response.isBackendError === true) {
    yield put(resetTable());
  }
}
