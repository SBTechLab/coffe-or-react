import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-blue-500 mt-10">Todo List</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
