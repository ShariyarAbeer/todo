import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Task from './components/Task'
import React, { useState } from 'react';


function App() {

  const [tasks, setTasks ] = useState([
    {
        id:1,
        text:"this is task 1",
        day: "day 1",
        reminder: true,
    },
    {
        id:2,
        text:"this is task 2",
        day: "day 2",
        reminder: true,
    },
    {
        id:3,
        text:"this is task 3",
        day: "day 3",
        reminder: true,
    },
])


  return (
    <div className="container">
     <Header title='This is a Todo App'/>
     <Task tasks={tasks}/>
     
     
    </div>
  );
}

export default App;
