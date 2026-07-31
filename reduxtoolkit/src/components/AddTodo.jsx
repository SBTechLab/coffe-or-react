import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../app/features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    dispatch(addTodo({ text: input }))
    setInput('')
  }

  return (
    <form onSubmit={addTodoHandler} className="flex gap-3 max-w-md mx-auto mt-10">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 text-white py-2 px-3 w-full outline-none focus:border-indigo-500"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600"
      >Add</button>
    </form>
  )
}

export default AddTodo
