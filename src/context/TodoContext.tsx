import { createContext, useContext, useRef, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import type { Todo } from '../types/todo'
import { getItem, setItem } from '../utils/storage'

// 내부에서 사용할 기능들의 타입 정의
interface TodoContextType {
    todos: Todo[]
    addTodo: (text: string) => void
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
    updateTodo: (id: number, newText: string) => void
}

const TodoContext = createContext<TodoContextType | undefined>(undefined) // 초기 Context 생성 (undefined 허용)

export function TodoProvider({ children }: { children: ReactNode }) {
    const lastId = useRef(4)
    const [todos, setTodos] = useState<Todo[]>(() =>
        getItem<Todo[]>('todos', [
            { id: 3, text: '공부하기', checked: true },
            { id: 2, text: '코딩하기', checked: false },
            { id: 1, text: '운동하기', checked: true },
        ]),
    )

    useEffect(() => {
        setItem('todos', todos) // todos 변경될 때마다 저장
    }, [todos])

    const addTodo = (text: string) => {
        const todo: Todo = { id: lastId.current, text, checked: false }
        setTodos([todo, ...todos])
        lastId.current++
    }

    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id)) // 선택한 id를 제외한 나머지 todo만 남김
    }

    const toggleTodo = (id: number) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo))) // 선택한 id의 todo의 checked 상태를 반전
    }

    const updateTodo = (id: number, newText: string) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)))
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export function useTodos(): TodoContextType {
    const context = useContext(TodoContext)

    return context!
}
