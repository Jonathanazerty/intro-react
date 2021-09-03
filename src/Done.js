import React, { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

const Done = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos]);

    return (
        <div>
        <div className="counter">{todos.filter(todo => todo.complete).length} done</div>
        {todos.map(todo => {
                if(todo.complete){
                    console.log(todo.name);
                 return (<div key={todo.id} value={todo.name}>{todo.name}</div>)
                } return (null)
        })}
        
        </div>
    )
};

export default Done;