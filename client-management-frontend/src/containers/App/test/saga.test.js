/**
 * Tests for HomePage sagas
 */

import { put } from 'redux-saga/effects';
import { getClient } from '../../../api/client';

import fetchSaga from '../fetchSaga';


/* eslint-disable redux-saga/yield-effects */
describe('fetchSaga', () => {
  let fetchSagaGenerator;
  beforeEach(() => {
    fetchSagaGenerator = fetchSaga(getClient, 'client');

    const putDescriptor = fetchSagaGenerator.next('client').value;
    expect(putDescriptor).toMatchSnapshot();

    const selectDescriptor = fetchSagaGenerator.next(getClient).value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the fulfilled if it requests the data successfully', () => {
    const response = {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
          lat: '-38.2386',
          lng: '57.2232',
        },
      },
      phone: '024-648-3804',
      website: 'ambrose.net',
      company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models',
      },
    };
    const putDescriptor = fetchSagaGenerator.next(response).value;
    expect(putDescriptor).toEqual(put({ type: 'FETCH_client_FULFILLED' }));
  });
});

