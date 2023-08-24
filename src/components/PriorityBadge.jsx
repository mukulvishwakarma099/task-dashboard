import React from "react";

const PriorityBadge = ({ type }) => {
  return (
    <div className="">
      <span
        className={`capitalize ${
          type === "high"
            ? "text-red-500 bg-red-300"
            : type === "medium"
            ? "text-yellow-700 bg-yellow-200"
            : type === "low"
            ? "text-green-600 bg-green-300"
            : "text-white"
        } text-xs rounded-lg px-1 py-1`}
      >
        {type}
      </span>
    </div>
  );
};

export default PriorityBadge;
