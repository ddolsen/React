// import React from 'react'
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'task-text-1',
      day: 'task-day-1',
      reminder: true,
    },
    {
      id: 2,
      text: 'task-text-2',
      day: 'task-day-2',
      reminder: true,
    },
    {
      id: 3,
      text: 'task-text-3',
      day: 'task-day-3',
      reminder: false,
    },
  ]);

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
};

// class App extends React.Component {
//   render() {
//     return <h1>class component example</h1>
//   }
// }

export default App;
