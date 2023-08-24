import React from "react";
import { BsCalendar4 } from "react-icons/bs";

const DateComponent = ({ date }) => {
  return (
    <div className="flex items-center text-gray-500 gap-1">
      <BsCalendar4 size={10} />
      <span className="text-xs">{date}</span>
    </div>
  );
};

export default DateComponent;
