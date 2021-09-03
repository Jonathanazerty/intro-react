import React from 'react';

export default function ToDo({ todo, checkToDo }) {
    function handleToDoClick() {
        checkToDo(todo.id)
    };

    return (
        <div className='ToDo'>
            <label>
                <input type="checkbox" checked = {todo.complete} onChange = {handleToDoClick}/>
                {todo.name}
            </label>
        </div>
    );
};