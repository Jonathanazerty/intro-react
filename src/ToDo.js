import React from 'react';

export default function ToDo(props) {
    const todos = props.todos;
    return (
        <div>
            {
                todos.map((todo) => (
                    <div key={todo.name}>
                        <input type="checkbox" checked={todo.complete}/>
                        {todo.name}
                    </div>
                ))
            }
        </div>
    );
};