"use client";
import Sidebar from "@/src/components/Workspace_sidebar/sidebar";
import WorkspaceContent from "@/src/components/Workspace_main/WorkspaceContent";
import { useWorkspaceContext } from "@/src/Context/Context";

export default function page() {
  const { sidebarVisible } = useWorkspaceContext();

  return (
    <div className="w-full min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`bg-primaryForeground transition-all duration-300 ease-in-out ${sidebarVisible ? "w-64 opacity-100" : "w-0 opacity-0 overflow-hidden"}`}
      >
        <Sidebar />
      </aside>
      {/* Workspace Content */}
      <main className="flex-1 min-w-0">
        <WorkspaceContent />
      </main>
    </div>
  );
}
