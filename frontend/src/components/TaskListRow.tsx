import {useState } from "react";

interface TaskListRowProps {
  labels: string[];
}

function TaskListRow({ labels }: TaskListRowProps) {
  const [checkboxSelected, setCheckboxSelected] = useState<boolean>(false);

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckboxSelected(true);
    } else {
      setCheckboxSelected(false);
    }
  };

  return (
    <div className="flex flex-col  items-center">
      {labels.map((label, index) => (
        <div
          key={index}
          className="flex min-h-8 items-center w-full justify-between"
        >
          <label className="min-w-20 text-xs font-medium leading-normal">
            {label}
          </label>
          <div className="flex justify-end items-center flex-1">
            <div className="relative h-4 w-4">
              <input
                type="checkbox"
                onChange={handleSelect}
                className="
                  peer
                  appearance-none
                  w-4 h-4
                  rounded-sm
                  bg-borderGray
                  border
                  border-borderGray
                  cursor-pointer
                  checked:bg-gray-800
                "
              />

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  hidden
                  peer-checked:flex
                  items-center
                  justify-center
                  text-white
                  text-[10px]
                  font-bold
                "
              >
                ✓
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskListRow;
