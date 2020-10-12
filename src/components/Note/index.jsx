import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import Note from './note';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = () => {
    notes.push(text);
    setText('');
  };

  const handleClearNotes = () => setNotes([]);

  return (
    <div>
      <h2>Note to Self</h2>
      <Form
        className="note-form"
      >
        <Form.Item onChange={event => setText(event.target.value)}>
          <Input value={text} />
        </Form.Item>
        <Button
          className="submit-btn"
          onClick={handleSubmit}
          type="primary"
        >
          Submit
        </Button>
      </Form>
      {
        notes && notes.map(((note, index) => {
          return (
            <Note key={index} note={note} />
          )
        }))
      }
      <Button
        className="clear-btn"
        onClick={handleClearNotes}
      >
        Clear Notes
      </Button>
      <hr />
    </div>
  )
};

export default Notes;
