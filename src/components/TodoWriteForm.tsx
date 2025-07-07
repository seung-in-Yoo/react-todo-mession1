import { useTodos } from '../context/TodoContext'
import type { FormEvent } from 'react'

function TodoWriteForm() {
    const { addTodo } = useTodos()

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        // e 타입 정의
        e.preventDefault()

        const form = e.currentTarget
        const input = form.todo as HTMLInputElement

        addTodo(input.value)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" name="todo" />
            <button type="submit">등록</button>
        </form>
    )
}

export default TodoWriteForm
