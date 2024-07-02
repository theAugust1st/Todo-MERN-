
import React from 'react'

const Todo = () => {
  
  return (
      <div className="w-full h-96 overflow-y-auto">
        <div className="flex items-center p-2 border-b">
          <input type="checkbox" className="mr-2" />
          <div className="flex-1">
            <h3 className="text-green-800 font-semibold">Do this</h3>
            <p className="text-gray-600">12:00</p>
          </div>
          <button className="text-red-500 py-2 px-7 rounded-md sm:px-6 md:px-9 border border-red-500 hover:text-red-700 hover:bg-red-500 hover:text-white">
            Delete
          </button>
        </div>
      </div>
  );
};

export default Todo;
