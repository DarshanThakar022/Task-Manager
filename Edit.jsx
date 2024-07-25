import React,{useState} from 'react'

const Edit = ({editTodo, task}) => {
  const[value,setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value,task.id);
    setValue(" ");
  }
  return (
    <div>
      <form className='mb-4 font-primary w-full' onSubmit={handleSubmit}>
        <input type="text" className='outline-none bg-transperent border border-gray-500 p-4 w-[300px] text-black mb-8 rounded placeholder:text-black' placeholder='Update Task' onChange={(e) => setValue(e.target.value)} value={value} />
        <button className='bg-gray-500  p-4 border text-white cursor-pointer rounded ml-2'>Update Task</button>
      </form>
    </div>
  )
}

export default Edit
