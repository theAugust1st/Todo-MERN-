import React from "react";
import DetailsPartion from "../Components/DetailsPartion.jsx";
import Todo from "../Components/TodoList.jsx";
import DynamicCreateTasks from "../Components/DynamicCreateTasks.jsx";
const Home = () => {
  return (
    <div className="bg-purple-500 w-3/ mx-auto grid grid-cols-3 gap-5 border-8 border-purple-600 rounded-md">
      <div>
        <DetailsPartion />
      </div>
      <div className="col-span-2 py-8 px-2 bg-gray-300  ">
        <DynamicCreateTasks />
        <Todo /> 
      </div>
    </div>
  );
};

export default Home;
