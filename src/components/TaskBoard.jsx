import React from "react";
import TaskList from "./TaskList";

const TaskBoard = () => {
  return (
    <div className="relative z-0">
      <TaskList percentage={"80%"} priorityType={"high"} />
      <TaskList percentage={"20%"} priorityType={"medium"} />
      <TaskList percentage={"55%"} priorityType={"low"} />
      <TaskList percentage={"100%"} priorityType={"medium"} />
      <TaskList percentage={"60%"} priorityType={"high"} />
      <TaskList percentage={"10%"} priorityType={"low"} />
      <TaskList percentage={"22%"} priorityType={"high"} />
    </div>
  );
};

export default TaskBoard;
