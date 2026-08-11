import { RiMoreLine } from "@remixicon/react";
import { Calendar } from "lucide-react";
import { Tag } from "lucide-react";

interface UserCardProps {
    title: string;
    avatar: string;
    role: string;
    dueDate: string;
    labels: string[];
}

export default function UserCard({ title, avatar, role, dueDate, labels }: UserCardProps) {
    return (
        <div className="w-full h-full border bg-white border-borderGray p-3 rounded-md">
            <div className="flex flex-col gap-5">
                {/* title */}
                <div className="flex justify-between items-center">
                    <span className="leading-normal line-height text-sm font-medium">{title}</span>
                    <div className="flex items-center justify-center">
                        <RiMoreLine className="w-3.5 h-3.5" />
                    </div>
                </div>
                {/* extra content */}
                <div className="flex flex-col gap-3">
                    {/* avatar frame */}
                    <div className="flex justify-between">
                        {/* avatar */}
                        <div className="flex gap-1 items-center">
                            <div className="w-5 h-5 rounded-full">
                                <img src={avatar} alt="" />
                            </div>
                            {/* role */}
                            <div>
                                <span className="font-medium leading-none text-xs text-[#171717]">{role}</span>
                            </div>
                        </div>
                        {/* due date */}
                        <div className="flex items-center gap-1 text-[#DC2626] bg-red-100 rounded-3xl border border-[#FFFFFF] px-2 py-0.5">
                            {/* icon */}
                            <Calendar className="w-3 h-3" />
                            <span className="font-medium leading-normal line-height text-xs">{dueDate}</span>
                        </div>
                    </div>
                    {/* label frame */}
                    <div className="gap-1.5 flex flex-wrap">
                        {labels.map((item:any, index:number) => (
                            <div key={index} className="flex gap-1 px-2 py-0.5 items-center bg-primary rounded-3xl">
                                <Tag className="w-3 h-3" />
                                <span className="font-medium leading-normal line-height text-xs text-[#171717]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
