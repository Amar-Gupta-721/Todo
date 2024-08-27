import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo, toggleComplete} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector((state)=>state.todos)
    const dispatch = useDispatch()
    const [editTodo, setEditTodo] = useState({id:null, text:''})

    const handleUpdate = (todo)=>{
        dispatch(updateTodo({
          id:editTodo.id,
          text:editTodo.text
        }))
        setEditTodo({id:null, text:''})
    }

    const handleComplete = (todo)=>{
        dispatch(toggleComplete({
            id:todo.id
        }))
    }
    
  return (
    <>
    <div className='text-2xl sm:text-3xl py-3 sm:py-5 text-center'>My Tasks</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className={`${editTodo.id===todo.id?"border-black":"border-transparent"} m-2 sm:m-3 flex flex-col sm:flex-row justify-between items-center bg-green-800 py-2 px-2 sm:px-4 sm:py-2 rounded-lg`}
            key={todo.id}
          >
            
              <div><input type="text" 
              className={`${editTodo.id!==todo.id?"border-none":"border-4 border-green-950"} ${todo.completed?"line-through":"text-black"} p-1 sm:p-2 rounded-lg bg-green-300`}
              value={todo.id===editTodo.id?editTodo.text:todo.text}
              readOnly={todo.id!==editTodo.id || todo.completed}
              onChange={(e)=>{
                  setEditTodo({...todo, text:e.target.value})
              }}
              /></div>

              <div className='flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 mt-2 sm:mt-0 sm:ml-4' >
                <button 
                onClick={()=>{ handleComplete(todo)}}
                className={`text-white bg-green-500 border-0 px-2 py-1 sm:py-1 sm:px-4 focus:outline-none hover:bg-green-950 rounded text-sm sm:text-lg`}>
                  {`${todo.completed?"undo":"Completed"}`}
                </button>
              <button className={`text-white bg-green-500 border-0 px-2 py-1 sm:py-1 sm:px-4 focus:outline-none hover:bg-green-950 rounded text-sm sm:text-lg`}
              onClick={()=>{
                if(editTodo.id===todo.id){
                    handleUpdate(todo)
                }
                else {
                    setEditTodo({id:todo.id, text:todo.text})
                }
              }}
              >{editTodo.id!==todo.id?"Update Todo":"Save"}</button>

              <button
              onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-green-500 border-0 px-2 py-1 sm:py-1 sm:px-4 focus:outline-none hover:bg-green-950 rounded text-sm sm:text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
              </div>

          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos