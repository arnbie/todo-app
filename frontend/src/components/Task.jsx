// filepath: /home/arnbie/Projects/ToDo/frontend/src/components/Task.jsx
import React from 'react';

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through' : ''}>{task.title}</span>
      </div>
      <button onClick={onDelete} className="text-red-500 hover:text-red-700">
        Delete
      </button>
    </div>
  );
};

export default Task;