import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Note from './note';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Note', () => {
  const props = {
    note: 'test note'
  };

  let note = mount(<Note {...props} />);

  test('renders the note text', () => {
    expect(note.find('p').text()).toEqual('test note');
  });
}); 