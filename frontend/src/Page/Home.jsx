import React from "react";
import DetailsPartion from "../Components/DetailsPartion.jsx";
import Todo from "../Components/Todo.jsx";
const Home = () => {
  return (
    <div className="bg-purple-500 w-3/ mx-auto grid grid-cols-3 gap-5">
      <div>
        <DetailsPartion />
      </div>
      <div className="col-span-2">
        <Todo />
      </div>
    </div>
  );
};

export default Home;
