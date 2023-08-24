import React from "react";
import { GrDocumentUpload } from "react-icons/gr";
import { RiFolderUploadLine } from "react-icons/ri";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { RiFileList2Line } from "react-icons/ri";
import { CiBoxList } from "react-icons/ci";

const OptionMenu = () => {
  return (
    <div className="z-50 absolute top-[9rem] right-0 border shadow-md py-3 flex flex-col gap-4 capitalize w-[200px] transition-all duration-200 bg-white">
      <div className="flex items-center gap-1 text-gray-500 px-4 cursor-pointer">
        <GrDocumentUpload size={20} />
        <span className="text-[.8rem]">creat task</span>
      </div>
      <div className="flex items-center gap-1 text-gray-500 px-4 cursor-pointer">
        <RiFolderUploadLine size={20} />
        <span className="text-[.8rem]">asign task</span>
      </div>
      <div className="flex items-center gap-1 text-gray-500 px-4 cursor-pointer border-y py-3">
        <AiOutlineFolderAdd size={20} />
        <span className="text-[.8rem]">create checklist</span>
      </div>
      <div className="flex items-center gap-1 text-gray-500 px-4 cursor-pointer">
        <RiFileList2Line size={20} />
        <span className="text-[.8rem]">create workflow</span>
      </div>
      <div className="flex items-center gap-1 text-gray-500 px-4 cursor-pointer">
        <CiBoxList size={20} />
        <span className="text-[.8rem]">import tasks</span>
      </div>
    </div>
  );
};

export default OptionMenu;
