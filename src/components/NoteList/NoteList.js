import './NoteList.css';

import { Link } from 'gatsby';
import React from 'react';

export default ({ notes }) => {
  return (
    <ul className="NoteList">
      {notes.map(note => (
        <li key={note.id} className="NoteList-item">
          <Link className="NoteList-item-link" to={note.path}>
            {note.title}
          </Link>
          <div className="NoteList-item-date">{note.date}</div>
        </li>
      ))}
    </ul>
  );
};
