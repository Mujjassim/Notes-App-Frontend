
import React from 'react';
import './noteItem.css';

const NoteItem = ({ task }) => {
  return (
    <div className="task-item">
      <div>{task}</div>
    </div>
  );
};

export default NoteItem;
