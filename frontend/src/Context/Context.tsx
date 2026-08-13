"use client";

import { useContext, createContext, ReactNode, useState } from "react";

type View = "board" | "list";

interface workspaceContextType {
  view: View;
  setView: (view: View) => void;
  showFields: boolean;
  setShowFields: (showFields: boolean) => void;
}

const WorkspaceContext = createContext<workspaceContextType | undefined>(
  undefined,
);

// interface workspace

export const WorkspaceProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<"list" | "board">("board");
  const [showFields, setShowFields] = useState<boolean>(false);
  return (
    <WorkspaceContext.Provider
      value={{ view, setView, showFields, setShowFields }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

export const useWorkspaceContext = () => {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error("useWorkspace mus be inside WorkspaceProvider");
  }
  return context;
};
