import { PanelLeft } from "lucide-react";
import WorkspaceFrame2 from "./WorkspaceFrame2";
import WorkspaceFrame1 from "./WorkspaceFrame1";

export default function WorkspaceContent() {
  return (
    <div className="w-full h-screen min-w-0">
      <header className="w-full p-4 border-b border-borderGray">
        <div className="flex gap-2">
          <div className="flex items-center w-7 h-7 justify-center">
            <PanelLeft className="w-4 h-4"/>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 text-borderGray flex items-center">|</span>
          </div>
        </div>
      </header>
      {/* Main content */}
      <main className="w-full pl-4 py-4">
        <div className="flex flex-col p-2 gap-5">
          <WorkspaceFrame1 />
          <WorkspaceFrame2 />
        </div>
      </main>
    </div>
  );
}
