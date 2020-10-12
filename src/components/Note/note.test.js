import { mount } from 'enzyme';
import React from 'react';
import Note from './note';

describe('Note', () => {
  const props = {
    note: 'test note'
  };

  let note = mount(<Note {...props} />);

  test('renders the note text', () => {
    expect(note.find('p').text()).toEqual('test note');
  });
}); 