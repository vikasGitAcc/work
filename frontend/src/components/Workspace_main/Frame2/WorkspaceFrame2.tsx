"use client";

import CardContainer from "../../Reusable_components/CardContainer";
import { sampleTasks } from "../../../data/taskData";
import { useWorkspaceContext } from "../../../Context/Context";

function WorkspaceFrame2() {
  const { visibleFields } = useWorkspaceContext();

  const columns = [
    {
      id: "to_do",
      title: "To Do",
    },
    {
      id: "doing",
      title: "Doing",
    },
    {
      id: "completed",
      title: "Completed",
    },
    {
      id: "on_hold",
      title: "On Hold",
    },
  ];

  // Transform Task data to CardContainer's expected format based on visible fields
  const transformTaskToCardData = (tasks: typeof sampleTasks) => {
    return tasks.map((task) => ({
      title: task.title,
      avatar: visibleFields.members ? task.members[0]?.avatar || "" : "",
      role: visibleFields.members ? task.members[0]?.name || "Unassigned" : "",
      dueDate: visibleFields.dueDate ? task.dueDate || "" : "",
      labels: visibleFields.priority
        ? task.priority
          ? [task.priority]
          : []
        : [],
      description: visibleFields.description ? task.description : "",
      status: visibleFields.status ? task.status : undefined,
      reporter: visibleFields.reporter ? task.reporter : undefined,
    }));
  };

  // Group tasks by status
  const data = columns.reduce(
    (acc, column) => {
      const columnTasks = sampleTasks.filter(
        (task) => task.status === column.id,
      );
      acc[column.id] = transformTaskToCardData(columnTasks);
      return acc;
    },
    {} as Record<string, ReturnType<typeof transformTaskToCardData>>,
  );

  return (
    <section className="w-full min-w-0 overflow-x-auto">
      <div className="flex w-max gap-4">
        {columns.map((column) => (
          <CardContainer
            key={column.id}
            title={column.title}
            data={data[column.id as keyof typeof data]}
            visibleFields={visibleFields}
          />
        ))}
      </div>
    </section>
  );
}

export default WorkspaceFrame2;
