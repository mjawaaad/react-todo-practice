'use client'
import { Input } from 'postcss'
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc,  setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask, {title, desc}]);
    setTitle("")
    setdesc("")
    console.log(mainTask)
  };

  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }


  let renderTask = <h2>No Task Available</h2>;

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return (
      <li key={i} className='flex items-center justify-between mb-5'>
        <div className='flex items-center justify-between mb-5 w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>

        <button 
        onClick={()=>{
          deleteHandler(i)
        }}
        className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
      );
    });
  }
  return (
    <>
    <h1 className='bg-black text-white text-5xl font-bold text-center p-5'>My Todo List</h1>

    <form onSubmit={submitHandler}>


      <input type="text" className="text-2xl border-zinc-800 border-2 px-4 py-2 m-8" placeholder='Enter Task Here'
      value={title}
      onChange={(e)=>{
        setTitle(e.target.value)
      }}
      
      />


      <input type="text" className="text-2xl border-zinc-800 border-2 px-4 py-2 m-8" placeholder='Enter Description'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      
      />

      <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>


    </form>

    <hr/>

    <div className='p-8 bg-slate-300'>
      <ul>
        {renderTask}
      </ul>

    </div>
    
    </>
  )
}

export default page