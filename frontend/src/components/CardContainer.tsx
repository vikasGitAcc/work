import { ReactNode } from "react";
import ComponentContainer from "./ComponentContainer";
import SixCircleIcon from "./SixCirclesIcon";
import { RiMoreLine } from "@remixicon/react";
import { Plus } from "lucide-react";
import UserCard from "./UserCard";

interface CardData {
  title: string;
  avatar: string;
  role: string;
  dueDate: string;
  labels: string[];
}

interface cardContainerProps {
    title: string,
    data: CardData[]
}

function CardContainer({ title, data }: cardContainerProps) {
    return (
        <div className="border w-[289px] shrink-0 h-fit rounded-lg border-borderGray bg-primary">
            <header>
                <ComponentContainer>
                    {/* header section */}
                    <div className="flex gap-2 items-center">
                        <SixCircleIcon size={14} />
                        <span className="text-xs leading-none font-semibold">{title}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Plus size={14} />
                        <RiMoreLine size={14} />
                    </div>
                </ComponentContainer>
            </header>
            <main className="px-2 flex flex-col gap-2">
                {data.map((item: any, index: number) => (
                    <UserCard key={index} title={item.title} avatar={item.avatar} role={item.role} dueDate={item.dueDate} labels={item.labels} />
                ))}
            </main>
            <footer>
                <ComponentContainer>
                    <div className="flex gap-2 items-center">
                        <Plus size={14} />
                        <span className="text-xs leading-normal font-medium line-height">Add Task</span>
                    </div>
                </ComponentContainer>
            </footer>
        </div>
    );
}

export default CardContainer;