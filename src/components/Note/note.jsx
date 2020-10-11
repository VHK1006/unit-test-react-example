import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ note }) => {
  return (
    <div className="note">
      <p>{note}</p>
    </div>
  )
};

Note.propTypes = {
  note: PropTypes.string
};

Note.defaultProps = {
  note: ''
}

export default Note;