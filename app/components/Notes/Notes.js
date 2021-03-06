import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

const Notes = ({username, addnotes, notes}) => {
  return (
    <div>
      <h3> NOTES for {username} </h3>
      <AddNote username={username} addNote={addNote} />
      <NotesList notes={notes} />
    </div>
  );
};

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default Notes;
