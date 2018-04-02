import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';
import { getLiteral } from '../../../utils/utilities';

describe('<Header />', () => {
  it('should render', () => {
    const text = getLiteral('Title test');
    const renderedComponent = shallow(
      <Header title={text} />
    );
    expect(
      renderedComponent.contains(text)
    ).toEqual(true);
  });
});
