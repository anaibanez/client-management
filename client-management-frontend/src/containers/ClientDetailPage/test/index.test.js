import React from 'react';
import { shallow } from 'enzyme';

import { ClientDetailPage } from '../index';
import LoadingIndicator from '../../../components/LoadingIndicator';
import { CLIENT_DETAIL_FETCH_KEY } from '../../App/fetchConstants';


describe('<ClientDetailPage />', () => {
  it('when fetching client should show a loading indicator', () => {
    const onGetDetail = jest.fn();
    const match = { params: { id: 1 } };
    const fetch = { [CLIENT_DETAIL_FETCH_KEY]: { fetching: true } };
    const renderedComponent = shallow(
      <ClientDetailPage onGetDetail={onGetDetail} fetch={fetch} match={match} />
    );
    expect(renderedComponent.contains(<LoadingIndicator />)).toEqual(true);
  });
});
