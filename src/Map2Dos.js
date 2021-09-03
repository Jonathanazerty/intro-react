import React from 'react'
import ToDo from './ToDo'

export default function mapToDos({todos, checkToDo}) {
    return (
        <div className='mapToDo'>
        {todos.map(todo => {
            return <ToDo key={todo.id} checkToDo={checkToDo} todo={todo} />
        })}
        </div>
    )
}