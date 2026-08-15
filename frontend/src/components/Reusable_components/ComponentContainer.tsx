import { ReactNode } from "react";

interface ComponentContainerProps {
    children: ReactNode;
}

function ComponentContainer({ children }: ComponentContainerProps) {
    return (
        <div className="p-3 flex justify-between w-full">
            {children}
        </div>
    );
}

export default ComponentContainer;