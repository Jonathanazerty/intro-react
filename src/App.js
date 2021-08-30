import logo from './todo.jpg';
import './App.css';
import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [todos, setTodos] = useState(["My First ToDo", "My Second ToDo", "My Third ToDo", "My Fourth ToDo"]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><h1>
          THE 2DO APP 📝.
          </h1></p>
          <ToDoList todos={todos}/>
          <input type="text"/>
          <button>Add 2Do</button>
      </header>
    </div>
  );
}

export default App;
