import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdWindow } from "react-icons/md";
import { GrAddCircle } from "react-icons/gr";
import OptionMenu from "./OptionMenu";

const OptionBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full flex justify-between px-10 py-5 border-b">
      <div className="">
        <HiOutlineMenuAlt3 className="cursor-pointer" size={25} />
      </div>
      <div className=" flex items-center gap-8 relative">
        <MdWindow size={25} className="cursor-pointer" />
        <GrAddCircle
          size={25}
          className="cursor-pointer"
          onClick={() => setShowMenu((prev) => !prev)}
        />
      </div>
      {showMenu ? <OptionMenu /> : null}
    </div>
  );
};

export default OptionBar;
