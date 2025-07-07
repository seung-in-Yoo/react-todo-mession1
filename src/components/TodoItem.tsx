import { useTodos } from '../context/TodoContext'
import type { Todo } from '../types/todo'
import { useState } from 'react'

function TodoItem({ todo }: { todo: Todo }) {
    const { removeTodo, toggleTodo, updateTodo } = useTodos()
    const [isEdit, setIsEdit] = useState(false)
    const [editText, setEditText] = useState(todo.text)

    const saveEdit = () => {
        const editTrim = editText.trim()
        if (editTrim !== '') {
            updateTodo(todo.id, editTrim) // 수정된 텍스트로 업데이트
        }
        setIsEdit(false)
    }

    return (
        <li>
            <input type="checkbox" onChange={() => toggleTodo(todo.id)} checked={todo.checked} />
            {isEdit ? (
                <>
                    <input // 수정시 나오는 폼
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)} // 입력값 저장
                        onKeyDown={(e) => e.key === 'Enter' && saveEdit()} // 엔터키로 저장
                    />
                    <button onClick={saveEdit}>저장</button>
                    <button onClick={() => setIsEdit(false)}>취소</button>
                </>
            ) : (
                <>
                    <span>{todo.text}</span>
                    <button onClick={() => setIsEdit(true)}>수정</button>
                    <button onClick={() => removeTodo(todo.id)}>X</button>
                </>
            )}
        </li>
    )
}

export default TodoItem
