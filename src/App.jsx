import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {

  return (
    <div className='px-4 lg:px-32 md:px-20 sm:px-10'>
    <AddTodo/>
    <Todos/>
    </div>
  )
}

export default App
