'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function page() {
  const {push}= useRouter();
  const[name,setName]=useState('')
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    push(`/prediction/${name}`)
  }
  return (
    <div className='min-h-screen flex items-center justify-center '>
      <div className='gird  grid-cols-1 p-4 shadow-md rounded-md   '>
      <h1 className=' text-3xl text-blue-700 font-bold p-3 border-b border-slate-800'>Enter Your Name</h1>


      <form onSubmit={handleOnSubmit}  className='p-5'>
        <input onChange={(e)=>setName(e.target.value)} className=' max-w-60 border border-blue-800 shadow-md rounded-md p-2'  type='text' placeholder='Type Your Name...'/><br></br>
        <button  type='submit' className='mt-5 bg-green-600 p-3'>Predict</button>
      </form>
 


</div>

    </div>
  )
}

export default page
