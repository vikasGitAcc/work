import CardContainer from "./CardContainer";

function WorkspaceFrame2() {

    const columns = [
        {
            id: "to_do",
            title: "To Do"
        },
        {
            id: "doing",
            title: "Doing"
        },
        {
            id: "completed",
            title: "Completed"
        },
        {
            id: "on_hold",
            title: "On Hold"
        }
        
    ]

    const data = {
        to_do: [
            {
                title:"Task-1",
                avatar:"",
                labels:["Production", "Development"],
                role:"admin",
                dueDate:"2025-10"
            },
            {
                title:"Task-2",
                avatar:"",
                labels:["Production", "Development"],
                role:"admin",
                dueDate:"2025-10"
            },
            {
                title:"Task-3",
                avatar:"",
                labels:["Production", "Development"],
                role:"admin",
                dueDate:"2025-10"
            },
            {
                title:"Task-4",
                avatar:"",
                labels:["Production", "Development"],
                role:"admin",
                dueDate:"2025-10"
            },
         
        ],
        doing: [
             {
                title:"Task-5",
                avatar:"",
                labels:["Production", "Development"],
                role:"admin",
                dueDate:"2025-10"
            },
        ],
        completed: [
             {
                title:"Task-6",
                avatar:"",
                labels:["Production", "Development"],
                role:"admin",
                dueDate:"2025-10"
            },
        ],
        on_hold: [
             {
                title:"Task-7",
                avatar:"",
                labels:["Production", "Development"],
                role:"admin",
                dueDate:"2025-10"
            },
        ]
    }


    return (
        <section className="flex gap-4">
              {columns.map(column => ( 
                <CardContainer title={column.title} data={data[column.id as keyof typeof data]}/>
              ))}
        </section>
    );
}

export default WorkspaceFrame2;