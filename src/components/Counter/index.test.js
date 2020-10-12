import { shallow } from 'enzyme';
import React from 'react';
import Counter from '.';

const wrapper = shallow(<Counter />);

test('render without errors', () => {
  expect(wrapper.exists()).toBeTruthy();
});

test('render button', () => {
  const button = wrapper.find('.increment-button');
  expect(button.exists()).toBeTruthy();
});

test('render counter display', () => {
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.exists()).toBeTruthy();
});

test('counter start at 0', () => {
  const count = wrapper.find("[data-test='count']");
  expect(count.text()).toBe("0");
});

test('click on button increments counter display', () => {
  // find the button
  const button = wrapper.find('.increment-button');

  // click the button
  button.simulate('click');

  // find the display, and test that the number has been incremented
  const count = wrapper.find("[data-test='count']");
  expect(count.text()).toBe("1");
});

test('click on button decrements counter display', () => {
  // find the decrement button
  const button = wrapper.find('.decrement-button');

  // click the button
  button.simulate('click');

  // find the display, and test that the number has been incremented
  const count = wrapper.find("[data-test='count']");
  expect(count.text()).toBe("0");
});
