import React from 'react';

export default function ToDo(props) {
    const todos = props.todos;
    return (
        <ul>
            {
                todos.map((todo) => (
                    <li key={todo.name}>
                        <input type="checkbox" checked={todo.complete}/>
                        {todo.name}
                    </li>
                ))
            }
        </ul>
    );
};