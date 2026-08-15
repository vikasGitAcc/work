"use client";

import { useContext, createContext, ReactNode, useState } from "react";

type View = "board" | "list";

type VisibleFields = {
  priority: boolean;
  members: boolean;
  dueDate: boolean;
  description: boolean;
  status: boolean;
  reporter: boolean;
};

interface workspaceContextType {
  view: View;
  setView: (view: View) => void;
  showFields: boolean;
  setShowFields: (showFields: boolean) => void;
  visibleFields: VisibleFields;
  setVisibleFields: (fields: VisibleFields) => void;
  sidebarVisible: boolean;
  setSidebarVisible: (sidebarVisible: boolean) => void;
  isSidebarWorkspaceCollapse: boolean;
  setIsSidebarWorkspaceCollapse: (isSidebarWorkspaceCollapse: boolean) => void;
}

const WorkspaceContext = createContext<workspaceContextType | undefined>(
  undefined,
);

// interface workspace

export const WorkspaceProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<"list" | "board">("board");
  const [showFields, setShowFields] = useState<boolean>(false);
  const [isSidebarWorkspaceCollapse, setIsSidebarWorkspaceCollapse] = useState<boolean>(false);
  const [visibleFields, setVisibleFields] = useState<VisibleFields>({
    priority: true,
    members: true,
    dueDate: true,
    description: false,
    status: false,
    reporter: false,
  });
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);
  return (
    <WorkspaceContext.Provider
      value={{
        view,
        setView,
        showFields,
        setShowFields,
        visibleFields,
        setVisibleFields,
        sidebarVisible,
        setSidebarVisible,
        isSidebarWorkspaceCollapse,
        setIsSidebarWorkspaceCollapse,
      }}
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
