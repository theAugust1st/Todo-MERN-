import React from 'react'
const tasks = []; // get title , description and time(if specified) from the backend or the user
const Todo = () => {
  return (
    <div className='py-8 px-2 bg-white'>
      <div>
      <h2 className='text-purple-500 text-2xl font-semibold p-2'>To-Do List</h2>
      </div>
      <div className='form-input bg-white p-2 flex justify-between gap-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent '>
      <input type='text' placeholder='Add a new task' className=' border-none outline-none bg-transparent grow' />
      <div className='flex gap-2'>

      <input type="time" id="timepicker" className="form-input px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"/>
      <button className='bg-purple-500 text-white py-2 px-9 rounded-md sm:px-6 md:px-9'>Add</button>
      </div>
      </div>
      <div className='w-full h-96 overflow-y-auto '>
        <div className='flex items-center p-2 border-b'>
                    <input type='checkbox' className='mr-2' />
                    <div className='flex-1'>
                      <h3 className='text-blue-800 font-semibold'>Do this</h3>
                      <p className='text-gray-600'>12:00</p>
                    </div>
                    <button className='text-red-500 hover:text-red-700'>Delete</button>
                  </div>
      </div>
    </div>
  )
}

export default Todo