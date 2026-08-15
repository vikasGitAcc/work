"use client";
import { PanelLeft } from "lucide-react";
import WorkspaceFrame2 from "./Frame2/WorkspaceFrame2";
import WorkspaceFrame1 from "./Frame1/WorkspaceFrame1";
import ListTable from "./Frame2/ListTable";
import { useWorkspaceContext } from "../../Context/Context";

export default function WorkspaceContent() {
  const { view, sidebarVisible, setSidebarVisible } = useWorkspaceContext();

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="w-full h-full min-w-0 flex flex-col">
      <header className="w-full p-4 border-b border-borderGray">
        <div className="flex gap-2">
          <button
            onClick={toggleSidebar}
            className="flex items-center w-7 h-7 justify-center hover:bg-gray-100 rounded cursor-pointer"
          >
            <PanelLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center">
            <span className="w-4 h-4 text-borderGray flex items-center">|</span>
          </div>
        </div>
      </header>
      {/* Main content */}
      <main className="w-full pl-4 py-4 flex-1 overflow-auto">
        <div className="flex flex-col p-2 gap-5">
          <WorkspaceFrame1 />
          {view === "list" ? <ListTable /> : <WorkspaceFrame2 />}
        </div>
      </main>
    </div>
  );
}
