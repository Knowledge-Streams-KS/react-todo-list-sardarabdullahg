import React, { useState } from "react";
import TaskList from "../TaskList/TaskList";

import "../Task/styles.css";

const Task = () => {
  const [newTask, setNewTask] = useState(""); // Declare newTask state
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    // Update the tasks array with the new task
    setTasks([...tasks, { description: newTask, done: false }]);
    setNewTask(""); // Clear the input field after adding the task
  };

  const deleteTask = (index) => {
    // Delete a task based on its index
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTaskStatus = (index) => {
    // Toggle the status of a task (completed or in-process)
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  return (
    <div className="task-container">
      <div className="task-form">
        <input
          className="task-input"
          type="text"
          placeholder="Enter new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="task-button" onClick={addTask}>
          Add Task
        </button>
      </div>

      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggleStatus={toggleTaskStatus}
      />
    </div>
  );
};

export default Task;
