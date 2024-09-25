
// src/components/NoteList.js

import React from 'react';
import NoteItem from '../noteItem/NoteItem';
import './noteList.css'; // Import the CSS file

const taskList = ({ tasks }) => {
  return (
    <div className="note-list-container">
      <div className="note-list-heading">Notes</div>
      <div className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <NoteItem key={index} task={task} />
          ))
        ) : (
          <div className="no-tasks" style={{padding : "10px 0px 10px 0px"}}>No tasks available</div>
        )}
      </div>
    </div>
  );
};

export default taskList;

