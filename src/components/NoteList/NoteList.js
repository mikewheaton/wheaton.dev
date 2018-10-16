import './NoteList.css';

import { Link } from 'gatsby';
import React from 'react';

export default ({ notes }) => {
  return (
    <ul className="NoteList">
      {notes.map(note => (
        <li key={note.id}>
          <Link to={note.path}>
            {note.title} ({note.date})
          </Link>
        </li>
      ))}
    </ul>
  );
};
