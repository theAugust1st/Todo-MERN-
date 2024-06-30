import React from 'react'

const Todo = () => {
  return (
    <div className='py-8 px-2'>
      <div>
      <h2 className='text-white text-2xl font-semibold p-2'>To-Do List</h2>
      </div>
      <div className='bg-white p-2 flex justify-between gap-2 rounded-md border-none '>
      <input type='text' placeholder='Add a new task' className=' border-none outline-none bg-transparent' />
      <input type="time" id="timepicker" className="form-input px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
      <button className='bg-purple-500 text-white py-2 px-9 rounded-md'>Add</button>
      </div>
    </div>
  )
}

export default Todo