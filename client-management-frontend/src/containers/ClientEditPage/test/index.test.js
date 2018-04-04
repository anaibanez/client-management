import React from 'react';
import { shallow } from 'enzyme';

import { mapDispatchToProps, ClientEditPage } from '../index';
import { updateClient } from '../actions';
import LoadingIndicator from '../../../components/LoadingIndicator';
import { CLIENT_FETCH_KEY } from '../../App/fetchConstants';


const client = {
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

describe('mapDispatchToProps', () => {
  describe('onUpdateClient', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onUpdateClient).toBeDefined();
    });

    it('should dispatch updateClient when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.onUpdateClient(client);
      expect(dispatch).toHaveBeenCalledWith(updateClient(client));
    });
  });
});

describe('<ClientEditPage />', () => {
  it('when fetching client should show a loading indicator', () => {
    const getClient = jest.fn();
    const match = { params: { id: 1 } };
    const fetch = { [CLIENT_FETCH_KEY]: { fetching: true } };
    const renderedComponent = shallow(
      <ClientEditPage client={client} onGetClient={getClient} fetch={fetch} match={match} />
    );
    expect(renderedComponent.contains(<LoadingIndicator />)).toEqual(true);
  });
});
