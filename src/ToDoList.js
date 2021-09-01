import React, {useRef, useState, useEffect} from 'react';
import ToDo from './ToDo';
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = 'todoApp.todos';

export default function ToDoList() {
    const initialTodos = [
        {name: 'Cleaning', id: '1'},
        {name: 'Studying React', id: '1'}
    ];

    const inputRef = useRef();
    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos (storedTodos);
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function clickHandler() {
        const input = inputRef.current.value;
        setTodos([...todos, {name: input, id: uuidv4(), completed: false }]);
    }

    console.log(todos);
    return (
        <>
            <label htmlFor="addToDo" id="what2do"> What do you need to do? </label>
            <input ref={inputRef} type="text" name="addToDo" id="addToDo" placeholder="add todo here..." />
            <input onClick={clickHandler} type="submit" value="SAVE" id="submit"/>
            <br></br>
            < ToDo todos={todos}/>
        </>
    );

}


// export default function ToDoList({todos}) {
//     const [text, setText] = useState('');
//     const inputRef = useRef();
//     const clickHandler = () => {
//         const inputElement = inputRef.current;

//         // Do something with inputElement...
//         console.log(inputElement.value);
//       }

//     return (
//     //     todoList.map(todo => {
//     //         return <ToDo todo={todo} />
//     //     })
//        <form className='addToDo'>
//            <div className="toDoControl">
//                <label>Add To Do </label>
//                <input ref={inputRef} type='text' placeholder=' add to do here' value={text} onChange={(e) => setText(e.target.value)}/><i></i>
//            </div>
//            <div className="toDoControl">
//                <label>{ToDo}</label>
//                <input type='checkbox' />
//            </div>
//            <input onClick={clickHandler} type='submit' value='save to do' className='submit' />
//        </form>
//     );
// };
