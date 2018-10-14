import React from 'react';
import { shallow } from 'enzyme';
import CallNow from './CallNow';

it('renders CallNow without crashing', () => {
  shallow(<CallNow />);
});
