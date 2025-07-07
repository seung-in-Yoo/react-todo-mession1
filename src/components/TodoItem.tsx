import { useTodos } from '../context/TodoContext'
import type { Todo } from '../types/todo'

function TodoItem({ todo }: { todo: Todo }) {
    const { removeTodo, toggleTodo } = useTodos()

    return (
        <li>
            <input type="checkbox" onChange={() => toggleTodo(todo.id)} checked={todo.checked} />
            {JSON.stringify(todo.checked)} / {todo.id} / {todo.text}
            <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
    )
}

export default TodoItem
