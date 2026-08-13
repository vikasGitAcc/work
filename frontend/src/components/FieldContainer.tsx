import { List } from "lucide-react";
import IconTextContainer from "./IconTextContainer";
import { Grid2X2 } from "lucide-react";
import TaskListRow from "./TaskListRow";
import { useWorkspaceContext } from "../Context/Context";
import { useEffect } from "react";

function FieldContainer() {

    const {view, setView} = useWorkspaceContext();

    useEffect(() => {
        console.log(view);
    }, [view]);

    const fields = [
        {
            id: "list",
            icon: <List size={16} className=""/>,
            text: "List",
            textStyle: "text-sm text-textGray font-medium leading-normal",
        },
        {
            id: "board",
            icon: <Grid2X2 size={16} className=""/>,
            text: "Board",
            textStyle: "text-sm text-textGray font-medium leading-normal",
        }
    ]

    const handleFieldSelection = (index: number) => {
        if (index === 0) {
            setView("list");
        } else {
            setView("board");
        }
    }

    const fieldRows = ["To Do", "Completed", "Doing", "On Hold"];
    const boardRows = ["Priority", "Status", "Assignee", "Due Date", "Members", "Description"];

    return (
        <div className="w-75 border p-4 rounded-lg border-borderGray">
            <div className="flex flex-col gap-4">
                {/* Toogle group */}
                <div className="w-full rounded-md border border-borderGray grid grid-cols-2">
                    {fields.map((item, index) => (
                        <div onClick={() => handleFieldSelection(index)} key={index} className={`border-r border-borderGray ${item.id === view ? 'bg-primary' : ''} cursor-pointer`}>
                            <IconTextContainer icon={item.icon} text={item.text} textStyle={item.textStyle} />
                        </div>     
                    ))}
                </div>
                
                {/* List view */}
                {view == "list" && (
                    <div className="w-full">
                        <TaskListRow labels={fieldRows} />
                    </div>
                )}

                {/* Board view */}
                {view == "board" && (
                    <div className="w-full">
                        <TaskListRow labels={boardRows} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default FieldContainer;