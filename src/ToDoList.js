import React, {useRef, useState, useEffect} from 'react';
import MapToDos from './MapToDos.js';
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = 'todoApp.todos';

export default function ToDoList() {

    const [todos, setTodos] = useState([]);
    const inputRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos (storedTodos);
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function checkToDo(id) {
        const newToDos = [...todos]
        const todo = newToDos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newToDos)
    };

    function clickHandler(e) {
        const input = inputRef.current.value;
        if (input === '') return
        setTodos(prevTodos => {
            return [...prevTodos, {id: uuidv4(), name: input, complete: false }]
        })
        inputRef.current.value = null
    };

    function clearCheckedToDos() {
        const newToDos = todos.filter(todo => !todo.complete)
        setTodos(newToDos)
    }

    console.log(todos);
    return (
        <>
            <label htmlFor="addToDo" id="what2do"> What do you need to do? </label>
            <input ref={inputRef} type="text" name="addToDo" id="addToDo" placeholder="add todo here..." />
            <input onClick={clickHandler} type="submit" value="SAVE" id="submit"/>
            <button onClick={clearCheckedToDos} id="clear"> Clear ✔️ ToDo's</button>
            <div id="number"><i>Stop procrastinating, still {todos.filter(todo => !todo.complete).length} to do !</i> </div>
            < MapToDos todos={todos} checkToDo={checkToDo}/>
        </>
    );

}

