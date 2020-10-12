import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

test('Should render without errors', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBeTruthy();
  expect(wrapper.find('.App').exists()).toBeTruthy();
});
