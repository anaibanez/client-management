import React from 'react';
import { shallow } from 'enzyme';

import { ClientListPage } from '../index';

describe('<ClientListPage />', () => {
  it('get clients to list', () => {
    const fetchClients = jest.fn();
    shallow(<ClientListPage fetch={{ clients: {} }} data={[]} onGetDataTable={fetchClients} />);
    expect(fetchClients).toHaveBeenCalled();
  });
});
