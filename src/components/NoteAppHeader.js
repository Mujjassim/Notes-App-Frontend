// src/components/NoteAppHeader.js

import React from 'react';

const NoteAppHeader = () => {
  return (
    <div className="note-app-header">
      <img
        src={`${process.env.PUBLIC_URL}/icons8-notes-app 1.png`} // Adjust the path as needed
        alt="Note App Icon"
        className="note-app-icon"
      />
      <h1>Note App</h1>
    </div>
  );
};

export default NoteAppHeader;
