import TodoWriteForm from './components/TodoWriteForm'
import TodoList from './components/TodoList'

function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white w-[500px] p-8 rounded-xl shadow-lg font-sans relative">
                <h1 className="text-center text-pink-600 text-2xl font-bold mb-4">TO DO LIST</h1>

                <div className="absolute right-10 top-9 text-blue-400 text-xs">DATE.</div>

                <TodoWriteForm />

                <TodoList />

                <div className="text-gray-400 text-xs text-right mt-6 italic">make my life awesome.</div>
            </div>
        </div>
    )
}

export default App
