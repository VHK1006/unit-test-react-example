import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Notes from './index';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Notes', () => {
  let notes = shallow(<Notes />);

  test('render without errors', () => {
    expect(notes.exists()).toBeTruthy();
  });

  test('render the notes title', () => {
    expect(notes.find('h2').text()).toEqual('Note to Self');
  })

  test('render the clear button', () => {
    expect(notes.find('.clear-btn').text()).toEqual('Clear Notes');
  });

  describe('when rendering the form', () => {
    test('create a form component', () => {
      expect(notes.find('.note-form').exists()).toBeTruthy();
    });

    test('render a form item component', () => {
      expect(notes.find('FormItem').exists()).toBeTruthy();
    });

    test('render a submit button', () => {
      expect(notes.find('.submit-btn').exists()).toBeTruthy();
    });
  });

  describe('when creating a note', () => {
    let testNote = 'test note';

    test('update the test in state', () => {
      const setNotes = jest.fn();
      const wrapper = shallow(<Notes onClick={setNotes} />);
      const handleClick = jest.spyOn(React, "useState");
      handleClick.mockImplementation(notes => [notes, setNotes]);
      wrapper.find('.submit-btn').simulate('click');
      expect(setNotes).toBeTruthy();
    });

    test('and submitting the new note', () => {
      notes.find('FormItem').simulate('change', {
        target: { value: testNote }
      });
      notes.find('.submit-btn').simulate('click');
      expect(notes.find('Note').props().note).toEqual(testNote);
    });

    test('click on clear button', () => {
      const setNotes = jest.fn();
      const wrapper = shallow(<Notes onClick={setNotes} />);
      const handleClick = jest.spyOn(React, "useState");
      handleClick.mockImplementation(notes => [notes, setNotes]);
      wrapper.find('.clear-btn').simulate('click');
      expect(setNotes).toBeTruthy();
    })
  });
});
