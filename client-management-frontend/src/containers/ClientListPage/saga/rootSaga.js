import { takeLatest } from 'redux-saga/effects';

import getDataTable from './getDataTableSaga';
import deleteClient from './deleteClientSaga';
import { GET_DATA_TABLE, DELETE_CLIENT } from '../constants';

export default function* product() {
  yield takeLatest(GET_DATA_TABLE, getDataTable);
  yield takeLatest(DELETE_CLIENT, deleteClient);
}
