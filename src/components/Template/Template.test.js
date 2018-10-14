import React from 'react';
import { shallow } from 'enzyme';
import Template from './Template';

it('renders Template without crashing', () => {
  shallow(<Template />);
});
