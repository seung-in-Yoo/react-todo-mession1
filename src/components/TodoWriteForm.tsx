import { useTodos } from '../context/TodoContext'
import type { FormEvent } from 'react'

function TodoWriteForm() {
    const { addTodo } = useTodos()

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        // e 타입 정의
        e.preventDefault()

        const form = e.currentTarget
        const input = form.todo as HTMLInputElement
        const value = input.value.trim() // 앞 뒤 공백 제거

        if (!value) {
            return
        } // 입력값이 비어있으면 아무 작업도 하지 않음
        addTodo(value) // 입력값이 비어있지 않으면 addTodo 호출
        input.value = '' // 입력 후 input 초기화
    }

    return (
        <form onSubmit={handleOnSubmit} className="flex items-center gap-2 mb-4">
            <input
                type="text"
                name="todo"
                placeholder="할 일을 입력하세요"
                className="flex-1 px-4 py-2 border-b-2 border-pink-300 outline-none"
            />
            <button type="submit" className="text-pink-600 font-semibold hover:underline whitespace-nowrap">
                등록
            </button>
        </form>
    )
}

export default TodoWriteForm
