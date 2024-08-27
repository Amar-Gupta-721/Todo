import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo} from '../features/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <div>
      <h1 className='font-bold text-2xl sm:text-4xl pt-11 pb-6 text-center'>Todo</h1>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-5 text-center">
    <input
      type="text"
      className="bg-green-800 rounded border border-green-950 focus:border-green-900 focus:ring-2 focus:ring-green-950 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit"
      className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-900 rounded text-lg mt-4 sm:mt-0"
    >
      Add Todo
    </button>
  </form>
    </div>
  )
}

export default AddTodo