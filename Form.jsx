import React, { useCallback, useState } from 'react'

const Form = ({createTodo}) => {
    const[value,setValue] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
     createTodo(value);
     setValue(" ");
    }
    
  return (
    <div>
      <form className='mb-4 font-primary w-full' onSubmit={handleSubmit}>
        <input type="text" className='outline-none bg-transperent border border-gray-500 p-4 w-[300px] text-black mb-8 rounded placeholder:text-black' placeholder='What task do you have today?' onChange={(e) => setValue(e.target.value)} value={value}/>
        <button className='bg-gray-500  p-4 border text-white cursor-pointer rounded ml-2'>Add Task</button>
      </form>
    </div>
  )
}

export default Form
