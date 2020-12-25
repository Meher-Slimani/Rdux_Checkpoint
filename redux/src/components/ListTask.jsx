import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

const ListTask = () => {
  const tasks = useSelector((state) => state);

  return (
    <div className="my-2">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
};

export default ListTask;
