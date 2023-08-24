import React from "react";
import TaskTitle from "./TaskTitle";
import Priority from "./Priority";
import PriorityBadge from "./PriorityBadge";
import DateComponent from "./DateComponent";
import ProgressBar from "./ProgressBar";
import Profile from "./Profile";

const TaskList = ({ percentage, priorityType }) => {
  return (
    <div className="flex justify-between items-center px-10 py-5 border-b">
      <div className="task_Profiles">
        <TaskTitle title={"Title"} />
      </div>
      <div className="priority flex items-center gap-8">
        <Priority priorityTitle={"Priority"} />
        <PriorityBadge type={priorityType} />
      </div>
      <div className="date">
        <DateComponent date={"22/03/18"} />
      </div>
      <div className="progress">
        <ProgressBar progressPercentage={percentage} />
      </div>
      <div className="profileIcon">
        <Profile />
      </div>
    </div>
  );
};

export default TaskList;
