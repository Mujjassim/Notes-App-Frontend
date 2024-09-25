import React, { useState } from 'react';
import './addNote.css';
import { publishTask } from '../../services/mqttService';

const AddTask = ({ setTasks }) => { // Accept setTasks as prop
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === '') {
      return alert('Task cannot be empty');
    }

    publishTask(task);  // Publish via MQTT
    setTasks((prevTasks) => [...prevTasks, task]); // Add to the state list
    setTask(''); // Clear the input after adding
  };

  return (
    <div className="add-note-section">
      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="New Note"
          className="note-input"
        />
        <button type="submit" className="add-note-button">
          <img
            src={`${process.env.PUBLIC_URL}/plus-circle.png`} // Path to your + icon
            alt="Add"
            className="add-icon"
          />
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
