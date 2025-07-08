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
        <li className="flex items-center justify-between border-b border-blue-200 py-2">
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    onChange={() => toggleTodo(todo.id)}
                    checked={todo.checked}
                    className="w-5 h-5 text-pink-500 border-2 border-pink-400 rounded-full appearance-none checked:bg-pink-500 checked:border-transparent"
                />

                {isEdit ? (
                    <input // 수정 시 나오는 폼
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)} // 입력값 저장
                        onKeyDown={(e) => e.key === 'Enter' && saveEdit()} // 엔터키로 저장
                        className="px-2 py-1 border rounded text-sm"
                    />
                ) : (
                    <span className={`text-sm ${todo.checked ? 'line-through text-gray-400' : ''}`}>{todo.text}</span>
                )}
            </div>

            <div className="flex gap-1 text-xs">
                {isEdit ? (
                    <>
                        <button onClick={saveEdit} className="text-green-600 hover:underline">
                            저장
                        </button>
                        <button onClick={() => setIsEdit(false)} className="text-gray-400 hover:underline">
                            취소
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={() => setIsEdit(true)} className="text-yellow-600 hover:underline">
                            수정
                        </button>
                        <button onClick={() => removeTodo(todo.id)} className="text-red-500 hover:underline">
                            삭제
                        </button>
                    </>
                )}
            </div>
        </li>
    )
}

export default TodoItem
