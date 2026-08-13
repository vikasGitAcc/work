"use client"
import { Search, LayoutGrid, Filter, Plus } from "lucide-react";
import FieldContainer from "./FieldContainer";
import { useWorkspaceContext } from "../Context/Context";

function WorkspaceFrame1() {
  const {showFields, setShowFields} = useWorkspaceContext();

  const toggleShowFields = () => {
     setShowFields(!showFields);
  }

  return (
    <div className="w-full flex justify-between items-center">
      <div className="text-base font-semibold leading-none flex items-center">
        Tasks
      </div>
      <div className="flex gap-2 items-center">
        <button className="px-3 hover:bg-primary rounded py-2 cursor-pointer  flex items-center justify-center">
          <Search size={14} className=" text-gray-500" />
        </button>
        <div className="relative">
          <button onClick={toggleShowFields} className="flex cursor-pointer items-center gap-1.5 px-3 py-2 text-xs text-gray-600 hover:bg-primary rounded">
            <LayoutGrid size={14} />
            <span className="text-xs font-medium leading-normal">Fields</span>
          </button>
          
          {showFields &&(
              <div className="z-50 absolute top-full right-0 mt-2 bg-white">
                <FieldContainer />
              </div>
          )}

        </div>
        <button className="px-3 hover:bg-primary rounded py-2 cursor-pointer  flex items-center justify-center">
          <Filter size={14} className="text-gray-500" />
        </button>
        <button className="flex cursor-pointer items-center gap-1 px-3 py-2 text-xs font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700">
          <Plus size={14} className="text-primaryForeground" />
          <span className="text-primaryForeground text-xs font-medium leading-normal">
            Add Task
          </span>
        </button>
      </div>
    </div>
  );
}

export default WorkspaceFrame1;
