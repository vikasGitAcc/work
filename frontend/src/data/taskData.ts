import { Task } from "../components/Workspace_main/ListTable";

export const sampleTasks: Task[] = [
  {
    id: "1",
    title: "Design Homepage",
    description: "Create the main landing page design",
    status: "to_do",
    priority: "high",
    members: [
      { id: "1", name: "Dexter", avatar: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4864.jpg?w=2000" },
    ],
    dueDate: "12 Sep 2026",
    reporter: { id: "1", name: "Dexter" },
  },
  {
    id: "2",
    title: "Develop Login Feature",
    description: "Implement user authentication",
    status: "to_do",
    priority: "low",
    members: [
      { id: "2", name: "CN", avatar: "" },
    ],
    dueDate: "15 Sep 2026",
    reporter: { id: "2", name: "CN" },
  },
  {
    id: "3",
    title: "Test Payment Gateway",
    description: "Test integration with payment provider",
    status: "to_do",
    priority: "medium",
    members: [],
    dueDate: "18 Sep 2026",
    reporter: { id: "1", name: "Dexter" },
  },
  {
    id: "4",
    title: "Design Dashboard",
    description: "Create admin dashboard UI",
    status: "doing",
    priority: "high",
    members: [
      { id: "1", name: "Dexter", avatar: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4864.jpg?w=2000" },
      { id: "3", name: "Alice", avatar: "" },
    ],
    dueDate: "20 Sep 2026",
    reporter: { id: "1", name: "Dexter" },
  },
  {
    id: "5",
    title: "API Integration",
    description: "Connect frontend with backend APIs",
    status: "doing",
    priority: "medium",
    members: [
      { id: "2", name: "CN", avatar: "" },
    ],
    dueDate: "22 Sep 2026",
    reporter: { id: "2", name: "CN" },
  },
  {
    id: "6",
    title: "User Testing",
    description: "Conduct user acceptance testing",
    status: "completed",
    priority: "low",
    members: [
      { id: "1", name: "Dexter", avatar: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4864.jpg?w=2000" },
    ],
    dueDate: "10 Sep 2026",
    reporter: { id: "1", name: "Dexter" },
  },
  {
    id: "7",
    title: "Bug Fixes",
    description: "Fix reported bugs from QA",
    status: "on_hold",
    priority: "high",
    members: [
      { id: "2", name: "CN", avatar: "" },
      { id: "3", name: "Alice", avatar: "" },
    ],
    dueDate: "25 Sep 2026",
    reporter: { id: "2", name: "CN" },
  },
];
