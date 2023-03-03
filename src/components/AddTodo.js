import React, { useState } from 'react'

function AddTodo(props) {

  const [work, setWork] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!work) {
      alert("Please fill work first.");
    }
    else {
      props.addTodo(work);
      setWork("")
    }
  }

  return (
    <div className='flex justify-center mt-12 space-x-2'>
      <form onSubmit={submit}>
          <div className="input-group">
            <input type="text" placeholder="Enter Your Todos Here…" value={work} onChange={(e)=>{setWork(e.target.value)}} className="input input-bordered" />
            <button className="btn btn-square hover:text-white">Add</button>
          </div>
      </form>
    </div>
  )
}

export default AddTodo
