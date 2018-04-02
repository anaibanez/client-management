import React from 'react';
import { shallow } from 'enzyme';

import ClientForm from '../index';

describe('<ClientForm />', () => {
  it('should render an <form> tag', () => {
    const renderedComponent = shallow(<ClientForm textButton={'test'} />);
    expect(renderedComponent.find('Form').length).toEqual(1);
  });
});
