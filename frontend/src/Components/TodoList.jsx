import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoList = () => {
  // const [todos, setTodos] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //     const fetchTodos = async () => {
  //         try {
  //             const response = await axios.get('/getTodos');
  //             if (response.status === 200 && response.data.success) {
  //               console.log(response)
  //                 setTodos(response.data.data);
  //             } else {
  //                 setError('Failed to fetch data');
  //             }
  //         } catch (err) {
  //             setError(err.message);
  //         } finally {
  //             setLoading(false);
  //         }
  //     };

  //     fetchTodos();
  // }, []);
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getTodos");
      setTodos(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
   try {
    const response = await axios.delete(
      `http://localhost:8000/deleteTodo/${id}`
    );
    setTodos(todos.filter((todo) => todo._id!== id));
   } catch (error) {
    console.log(error);
   }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <><div className="w-full h-96 overflow-y-auto">
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <div className="flex items-center p-2 border-b">
              <div className="flex-1">
                <h3 className="text-green-800 font-semibold">{todo.title}</h3>
                <div className="flex space-x-1">{todo.tasks.map((task, index)=>(
                 <div key={index} className="flex"> 
                 <input type="checkbox" className="mr-2" />
                  <p>{task}</p></div>
                ))}</div>
                <p className="text-gray-600">----</p>
              </div>
              <button
                onClick={() => handleDelete(todo._id)}
                className="text-red-500 py-2 px-7 rounded-md sm:px-6 md:px-9 border border-red-500 hover:text-red-700 hover:bg-red-500 hover:text-white"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default TodoList;
