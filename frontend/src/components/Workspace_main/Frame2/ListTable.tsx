"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  MoreVertical,
  Plus,
  Calendar,
  Tag,
  SignalHigh,
  SignalMedium,
  SignalLow,
} from "lucide-react";
import { RiMoreLine } from "@remixicon/react";
import { useWorkspaceContext } from "../../../Context/Context";
import { sampleTasks } from "../../../data/taskData";

// Task Type Definition
export type Task = {
  id: string;
  title: string;
  description?: string;
  status: "to_do" | "doing" | "completed" | "on_hold";
  priority?: "low" | "medium" | "high";
  members: {
    id: string;
    name: string;
    avatar?: string;
  }[];
  dueDate?: string;
  reporter?: {
    id: string;
    name: string;
    avatar?: string;
  };
};

// Column Definitions
export const columnDefinitions = [
  { id: "priority", label: "Priority" },
  { id: "members", label: "Members" },
  { id: "dueDate", label: "Due Date" },
  { id: "description", label: "Description" },
  { id: "status", label: "Status" },
  { id: "reporter", label: "Reporter" },
];

// Status Section Definitions
const statusSections = [
  { id: "to_do" as const, label: "To Do" },
  { id: "doing" as const, label: "Doing" },
  { id: "completed" as const, label: "Completed" },
  { id: "on_hold" as const, label: "On Hold" },
];

// Priority Badge Component
function PriorityBadge({ priority }: { priority?: "low" | "medium" | "high" }) {
  if (!priority) return <span className="text-sm text-gray-400">-</span>;

  const styles = {
    high: "text-red-700 ",
    medium: "text-orange-500",
    low: "text-gray-500 ",
  };

  return (
    <div className="flex items-center gap-1">
      <span className={`flex items-center ${styles[priority]} h-3 w-3`}>
        {priority === "high" ? (
          <SignalHigh />
        ) : priority === "medium" ? (
          <SignalMedium />
        ) : priority === "low" ? (
          <SignalLow />
        ) : null}
      </span>
      <span
        className={`px-2 py-1 text-xs font-medium capitalize ${styles[priority]}`}
      >
        {priority}
      </span>
    </div>
  );
}

// Members Display Component
function MembersDisplay({ members }: { members: Task["members"] }) {
  if (members.length === 0) {
    return (
      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">
        +
      </div>
    );
  }

  const displayMembers = members.slice(0, 3);
  const remainingCount = members.length - 3;

  return (
    <div className="flex items-center">
      {displayMembers.map((member, index) => (
        <div
          key={member.id}
          className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium text-white bg-gray-400 ${
            index > 0 ? "-ml-2" : ""
          }`}
          style={{ zIndex: 10 - index }}
        >
          {member.avatar ? (
            <img
              src={member.avatar}
              alt={member.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            member.name.slice(0, 2).toUpperCase()
          )}
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-xs text-gray-600 -ml-2">
          +{remainingCount}
        </div>
      )}
    </div>
  );
}

// Task List Section Component
function TaskListSection({
  status,
  label,
  tasks,
  visibleFields,
}: {
  status: Task["status"];
  label: string;
  tasks: Task[];
  visibleFields: ReturnType<typeof useWorkspaceContext>["visibleFields"];
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Section Header */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="w-full flex items-center justify-between hover:bg-gray-50 hover:cursor-pointer transition-colors"
      >
        <div className="flex items-center gap-1">
          {isCollapsed ? (
            <ChevronRight size={16} className="text-gray-500" />
          ) : (
            <ChevronDown size={16} className="text-gray-500" />
          )}
          <span className="text-sm font-semibold leading-none">{label}</span>
        </div>
      </button>

      {!isCollapsed && (
        <div className="w-full border border-borderGray rounded-md overflow-x-auto">
          <table className="w-full min-w-150">
            {/* Table Header */}
            <thead>
              <tr className="bg-primary border-b border-borderGray">
                <th
                  className="text-left px-3 py-3 text-sm font-medium text-primaryText min-w-21.25"
                  style={{ width: "493px" }}
                >
                  Task
                </th>
                {visibleFields.priority && (
                  <th
                    className="text-left px-3 py-3 text-sm font-medium text-primaryText min-w-21.25"
                    style={{ width: "120.75px" }}
                  >
                    Priority
                  </th>
                )}
                {visibleFields.members && (
                  <th
                    className="text-left px-3 py-3 text-sm font-medium text-primaryText min-w-21.25"
                    style={{ width: "120.75px" }}
                  >
                    Members
                  </th>
                )}
                {visibleFields.dueDate && (
                  <th
                    className="text-left px-3 py-3 text-sm font-medium text-primaryText min-w-21.25"
                    style={{ width: "120.75px" }}
                  >
                    Due Date
                  </th>
                )}
                {visibleFields.description && (
                  <th
                    className="text-left px-3 py-3 text-sm font-medium text-primaryText min-w-21.25"
                    style={{ width: "120.75px" }}
                  >
                    Description
                  </th>
                )}
                {visibleFields.status && (
                  <th
                    className="text-left px-3 py-3 text-sm font-medium text-primaryText min-w-21.25"
                    style={{ width: "120.75px" }}
                  >
                    Status
                  </th>
                )}
                {visibleFields.reporter && (
                  <th
                    className="text-left px-3 py-3 text-sm font-medium text-primaryText min-w-21.25"
                    style={{ width: "120.75px" }}
                  >
                    Reporter
                  </th>
                )}
                <th
                  className="text-right px-3 py-3 text-sm font-medium text-primaryText min-w-21.25"
                  style={{ width: "120.75px" }}
                >
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {tasks.length === 0 ? (
                <tr>
                  <td
                    colSpan={
                      1 +
                      (visibleFields.priority ? 1 : 0) +
                      (visibleFields.members ? 1 : 0) +
                      (visibleFields.dueDate ? 1 : 0) +
                      (visibleFields.description ? 1 : 0) +
                      (visibleFields.status ? 1 : 0) +
                      (visibleFields.reporter ? 1 : 0) +
                      1
                    }
                    className="px-3 py-8 text-center text-sm text-gray-500"
                  >
                    No tasks
                  </td>
                </tr>
              ) : (
                tasks.map((task) => (
                  <tr
                    key={task.id}
                    className="border-b border-borderGray hover:bg-gray-50 text-primaryText"
                  >
                    <td className="p-3">
                      <span className="text-sm font-medium">{task.title}</span>
                    </td>
                    {visibleFields.priority && (
                      <td className="px-3 py-3">
                        <PriorityBadge priority={task.priority} />
                      </td>
                    )}
                    {visibleFields.members && (
                      <td className="px-3 py-3">
                        <MembersDisplay members={task.members} />
                      </td>
                    )}
                    {visibleFields.dueDate && (
                      <td className="px-3 py-3">
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Calendar size={14} />
                          <span>{task.dueDate || "-"}</span>
                        </div>
                      </td>
                    )}
                    {visibleFields.description && (
                      <td className="px-3 py-3">
                        <span className="text-sm text-gray-600 truncate max-w-50 block">
                          {task.description || "-"}
                        </span>
                      </td>
                    )}
                    {visibleFields.status && (
                      <td className="px-3 py-3">
                        <span className="text-sm text-gray-600 capitalize">
                          {task.status.replace("_", " ")}
                        </span>
                      </td>
                    )}
                    {visibleFields.reporter && (
                      <td className="px-3 py-3">
                        <span className="text-sm text-gray-600">
                          {task.reporter?.name || "-"}
                        </span>
                      </td>
                    )}
                    <td className="px-3 flex justify-end py-3">
                      <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                        <RiMoreLine size={16} className="text-gray-500" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Add Task Row */}
          <button className="w-full px-3 py-3 flex items-center gap-2 text-sm text-primaryText hover:cursor-pointer hover:bg-gray-50 transition-colors">
            <Plus size={16} />
            <span>Add Task</span>
          </button>
        </div>
      )}
    </div>
  );
}

// Main List Table Component
export default function ListTable() {
  const { visibleFields } = useWorkspaceContext();

  // Group tasks by status
  const tasksByStatus = statusSections.reduce(
    (acc, section) => {
      acc[section.id] = sampleTasks.filter(
        (task) => task.status === section.id,
      );
      return acc;
    },
    {} as Record<string, Task[]>,
  );

  return (
    <div className="w-full min-w-0">
      <div className="w-full flex flex-col gap-4">
        {statusSections.map((section) => (
          <TaskListSection
            key={section.id}
            status={section.id}
            label={section.label}
            tasks={tasksByStatus[section.id] || []}
            visibleFields={visibleFields}
          />
        ))}
      </div>
    </div>
  );
}
