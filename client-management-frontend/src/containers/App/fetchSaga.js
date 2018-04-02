import { call, put } from 'redux-saga/effects';

import { showError } from './actions';

export default function* fetchApiSaga(apiRequest, resource, content, action) {
  try {
    yield put({
      type: `FETCH_${resource}_PENDING`,
    });
    const response = yield call(apiRequest, content);
    yield put({
      type: `FETCH_${resource}_FULFILLED`,
    });
    if (action) {
      yield put(action(response));
    }
    return response;
  } catch (error) {
    yield put({
      type: `FETCH_${resource}_REJECTED`,
    });
    yield put(showError(error));
    return error;
  }
}
