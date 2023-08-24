import React from "react";

const ProgressBar = ({ progressPercentage }) => {
  return (
    <div className="flex items-center gap-5">
      <div className="w-[8rem] h-2 bg-gray-300 rounded-full">
        <div
          style={{ width: `${progressPercentage}` }}
          className={`h-full rounded-l-full ${
            progressPercentage > "50%"
              ? "bg-cyan-500"
              : progressPercentage < "50%"
              ? "bg-yellow-500"
              : "bg-white"
          }`}
        ></div>
      </div>
      <span
        className={`text-sm font-bold ${
          progressPercentage >= "50%" ? "text-cyan-500" : "text-yellow-500"
        }`}
      >
        {progressPercentage}
      </span>
    </div>
  );
};

export default ProgressBar;
