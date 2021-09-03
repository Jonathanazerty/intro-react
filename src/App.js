import logo from './todo.jpg';
import './App.css';
import React from "react";
import ToDoList from "./ToDoList";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Done from './Done';
import NotDone from './NotDone';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          THE 2DO APP 📝.
        </h1>
          <Router>
            <ToDoList />
              <Link to="/"><button class="btnToDo" type="button"> To Be Done </button></Link>
              <Link to="/Done"><button class="btnDone" type="button"> Or Not To Be Done</button></Link>
            <Switch>
              <Route path="/" exact component={NotDone}/>
              <Route path="/Done" component={Done}/>
            </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;

