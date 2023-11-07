import React from 'react';
import './App.css';
import TaskManager from './Taskmanager';
import { Provider } from 'react-redux';
import Store from './Store';

function App() {
  return (
  
    <Provider store={Store}>
    <div><TaskManager /></div>
    </Provider>
  )
}

export default App
