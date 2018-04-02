import {
  CREATE_CLIENT,
} from '../constants';

import {
  createClient,
} from '../actions';

describe('Create Client Actions', () => {
  describe('createClient', () => {
    it('should return the correct type and the passed client', () => {
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
      const expectedResult = {
        type: CREATE_CLIENT,
        clientToUpdate: client,
      };

      expect(createClient(client)).toEqual(expectedResult);
    });
  });
});
