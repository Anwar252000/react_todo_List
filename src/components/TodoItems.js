import React from 'react'

function Todo({todo, onDelete}) {
  return (
    <div className="mt-16 flex justify-center space-x-2">
      <li className='w-96 font-bold'>{todo.work}</li>
      <button onClick={()=>{onDelete(todo)}}><i className='fa fa-trash'></i></button>
    </div>
  )
}

export default Todo
