"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}])
    settitle("")
    setdesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i , 1)
    setmainTask(copytask)
  }
  let renderTask = <h2 className='text-center'>No Task Available</h2>

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <p className='text-lg font-medium'>{t.desc}</p>
        </div>
        <button
         onClick={()=>{
          deleteHandler(i)
         }} 
         className='bg-red-400 text-white px-4 py-2 rounded font-bold '>Delete</button>
        </li>
      );
    });
  }
  return (
    <>
      <div className='flex bg-black justify-center '>
        <img src="image/test.png" className='flex justify-end py-4' width="50px" height="50px" />
        <h1 className='text-white py-5 text-5xl font-bold'>Todo List</h1>
      </div>
      <div  style={{backgroundImage:'url("image/7561340.jpg")'}}>
        <form className='grid place-content-center'  onSubmit={submitHandler}>
          <h1 className='text-2xl mx-8 mt-8 font-bold'>Title:</h1>  
          <input type="text" className='text-2xl border-zinc-800 border-4 mx-8 px-4 py-2' placeholder='Enter Title Here'
          value={title}
          onChange={(e)=>{settitle(e.target.value)}} />
          <br />
          <h1 className='text-2xl mx-8 font-bold'>Desciption:</h1>
          <textarea type="text" className='text-2xl border-zinc-800 border-4 mx-8 px-4 py-5 ' placeholder='Enter Description Here'
          value={desc}
          onChange={(e)=>{setdesc(e.target.value)}} />
          <br />
          <button className='bg-black text-white mt-2 mb-8 px-4 py-3 rounded text-bold text-2xl w-1/3 mx-40'>Add Task</button>
        </form>
        <div className='p-8 bg-slate-200'>
          <ul>
            {renderTask}
          </ul>
      </div>
    </div>
      
    <div className='relative' style={{backgroundImage:'url("image/7561340.jpg")'}}>
      <br /><br /><br />
    </div>
    </>
  )
}

export default page