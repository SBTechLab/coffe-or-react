import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../app/features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todo.todos)
  const dispatch = useDispatch()

  return (
    <div className="max-w-md mx-auto mt-6">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center bg-gray-800 text-white px-4 py-2 rounded mb-2">
            {todo.text}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 px-2 py-1 rounded text-sm hover:bg-red-400"
            >X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
