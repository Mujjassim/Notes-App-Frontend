// src/App.js

import React, { useState } from 'react';
import './App.css';
import AddTask from './components/addNote/AddNote'; // Corrected the component name
import TaskList from '../src/components/noteList/NoteList';
import NoteAppHeader from './components/NoteAppHeader';

const App = () => {
  const [tasks, setTasks] = useState([]); // This state holds all tasks

  return (
    <div className="note-app-container">
      <NoteAppHeader />
      <AddTask setTasks={setTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
