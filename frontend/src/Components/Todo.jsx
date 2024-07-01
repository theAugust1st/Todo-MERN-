import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState({
    title: "",
    tasks: [],
    time: "",
  });
  const [taskInput, setTaskInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setToBackend();
  };

  const setToBackend = async () => {
    const response = await axios.post(
      "http://localhost:8000/createTodo",
      todos
    );
    console.log(response);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodos({ ...todos, [name]: value });
  };

  const handleTaskInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => ({
      ...prevTodos,
      tasks: [...prevTodos.tasks, taskInput],
    }));
    setTaskInput("");
  };

  return (
    <div className="py-8 px-2 bg-gray-300">
      <div>
        <h2 className="text-purple-500 text-2xl font-semibold p-2">
          To-Do List
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-input bg-white p-2 flex flex-col gap-2 rounded-md border border-gray-300">
          <div>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="border-none outline-none bg-transparent grow"
              value={todos.title}
              onChange={handleChange}
            />
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Task"
              name="taskInput"
              value={taskInput}
              onChange={handleTaskInputChange}
              className="border-none outline-none bg-transparent"
            />
            <button
              className="text-purple-500 rounded-md"
              onClick={handleAddTask}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          {todos.tasks.map((task, index) => (
            <div key={index}>
              <div className="flex justify-start space-x-5">
              <input type="checkbox" className="mr-2" />
                <h3 className="text-green-800 font-semibold">{task}</h3>
                <button>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between gap-2">
            <div className="space-x-2">
              <input
                type="time"
                id="timepicker"
                name="time"
                value={todos.time}
                onChange={handleChange}
                className="form-input px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <button
                type="submit"
                className="text-green-500 py-2 px-7 rounded-md sm:px-6 md:px-9 border border-green-500 hover:bg-green-500 hover:text-white"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </form>
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
    </div>
  );
};

export default Todo;
