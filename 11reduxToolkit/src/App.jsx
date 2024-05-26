import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <main className='px-10 py-12 flex flex-col space-y-10'>
      <AddTodo />
      <Todos />
    </main>
  )
}

export default App
