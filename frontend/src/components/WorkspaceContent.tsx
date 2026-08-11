import { PanelLeft } from "lucide-react";
import WorkspaceFrame2 from "./WorkspaceFrame2";

export default function WorkspaceContent() {
  return (
    <div className="w-full h-screen">
      <header className="w-full p-4 border-b border-borderGray">
        <div className="flex gap-2">
          <div className="flex items-center justify-center">
            <PanelLeft className="w-4 h-4"/>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 text-borderGray flex items-center">|</span>
          </div>
        </div>
      </header>
      {/* Main content */}
      <main className="w-full p-4">
          <WorkspaceFrame2 />
      </main>
    </div>
  );
}
