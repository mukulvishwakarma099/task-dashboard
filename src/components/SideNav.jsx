import React from "react";
import Logo from "../assets/check-logo.png";
import { BsClipboardCheck } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import { GoTasklist } from "react-icons/go";
import { AiOutlineFolder } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import Profile from "../assets/profile.png";

const SideNav = () => {
  return (
    <nav className="h-[100vh] w-[100px] flex flex-col justify-between border-r py-5">
      <div className="flex items-center flex-col gap-5">
        <div className="logo cursor-pointer">
          <img src={Logo} className="w-8" alt="" />
        </div>

        <div className="navlinks mt-5 flex flex-col items-center">
          <div className="link flex flex-col items-center text-gray-600 cursor-pointer px-3 py-5">
            <BsClipboardCheck size={23} />
            <span className="text-xs">Compliance</span>
          </div>
          <div className="link flex flex-col items-center text-gray-600 cursor-pointer px-3 py-5">
            <FiBell size={23} />
            <span className="text-xs">Activity</span>
          </div>
          <div className="link flex flex-col items-center text-gray-600 cursor-pointer px-3 py-5">
            <GoTasklist size={23} />
            <span className="text-xs">Task</span>
          </div>
          <div className="link flex flex-col items-center cursor-pointer px-3 py-5 bg-cyan-100 w-full text-cyan-500">
            <AiOutlineFolder size={23} />
            <span className="text-xs">Record</span>
          </div>
        </div>
      </div>

      <div className="profile_search flex items-center flex-col gap-5">
        <BiSearchAlt size={23} className="cursor-pointer" />
        <div>
          <img src={Profile} className="w-9 cursor-pointer" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
