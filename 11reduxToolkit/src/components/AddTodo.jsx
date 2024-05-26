import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todo/todoSlice"

export default function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();

        dispatch(addTodo(input));

        setInput('');
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3">
            <input type="text" className="rounded-lg border text-base outline-none py-1 px-3 leading-8 transition-colors duration-300 ease-in-out" placeholder="Enter a Todo..." value={input} onChange={(e) => setInput(e.target.value)} />

            <button type="submit" className="text-white bg-gray-500 py-2 px-6 hover:bg-gray-600 rounded-lg text-lg">Add Todo</button>
        </form>
    )
}
