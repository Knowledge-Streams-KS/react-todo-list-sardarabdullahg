import React from "react";

const TaskList = ({ tasks, onDelete, onToggleStatus }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onToggleStatus(index)}
          />
          {task.description}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
