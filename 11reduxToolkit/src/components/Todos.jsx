import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { removeTodo } from "../features/todo/todoSlice"

export default function Todos() {
    const todos = useSelector(state => state.todos);

    const dispatch = useDispatch();

    return (
        <section>
            {todos.map((todo) => (
                <div key={todo.id} className="flex space-x-10">
                <h2>{todo.text}</h2>
                <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
                </div>
            ))}
        </section>
    )
}
