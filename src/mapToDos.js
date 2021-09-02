import React from 'react'
import ToDo from './ToDo'

export default function mapToDos({todos, checkToDo}) {
    return (
        todos.map(todo => {
            return <ToDo key={todo.id} checkToDo={checkToDo} todo={todo} />
        })
    )
}
