import logo from './todo.jpg';
import './App.css';
import React from "react";
import ToDoList from "./ToDoList";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          THE 2DO APP 📝.
        </h1>
          <ToDoList />
      </header>
    </div>
  );
}

export default App;
