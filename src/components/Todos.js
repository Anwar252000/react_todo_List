import React from 'react'
import TodoItems from '../components/TodoItems';
import AddTodo from './AddTodo';
function Todos(props) {  

   
  return (
    <>
      <div className="container mt-16 bg-slate-100">
         <h1 className='text-center text-2xl font-bold'>Todo List</h1>
         <AddTodo addTodo={props.addTodo}/>
         {props.todos.length===0?"No Todos Available":
         props.todos.map((todo) =>{
          return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
         })}
      </div>
    </>
  )
}

export default Todos

