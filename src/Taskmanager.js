import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, toggleComplete } from './Actions/Task';

const TaskManager = () => {
 const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleAddTask = () => {
    if (taskText.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: taskText,
      isComplete: false,
    };
    dispatch(addTask(newTask));
    setTaskText('');
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleComplete = (taskId) => {
    dispatch(toggleComplete(taskId));
  };

  return (
    <div>
      <h1 className='heading'>Task Manager</h1>
      <div>
        <input className='input'
          type="text"
          placeholder="Add a task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button className='btn' onClick={handleAddTask}>Add Task</button>
      </div>
      <div className='div'>
      <ul>
        {tasks.map((task) => (
          <li className='list' key={task.id}>
            <span className='span'
               style={{ textDecoration: task.isComplete ? 'line-through' : 'none' }}
            >
          
              {task.text}
            
            </span>
            <br/>
           
            <button className='btn' onClick={() => handleToggleComplete(task.id)}>
              {task.isComplete ? 'Undo' : 'Complete'}
            </button>
            <button className='btn' onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TaskManager
