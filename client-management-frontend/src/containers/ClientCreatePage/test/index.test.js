// eslint-disable-next-line no-unused-vars
import React from 'react';

import { mapDispatchToProps } from '../index';
import { createClient } from '../actions';

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
  describe('onCreateClient', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onCreateClient).toBeDefined();
    });

    it('should dispatch createClient when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.onCreateClient(client);
      expect(dispatch).toHaveBeenCalledWith(createClient(client));
    });
  });
});
