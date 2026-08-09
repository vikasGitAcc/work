import Link from "next/link"; 

export default function Workspace({title, icon, address, active}: {title: string, icon: string, address: string, active: boolean}) {
    return (
        <Link href={address} className={`${active?"bg-[#f5f5f5] rounded-xl":""} h-9 px-3 py-2 flex items-center gap-2`}>
            {/* icon */}
            <div className="w-4 h-4 flex items-center justify-center">
                {icon}
            </div>
            {/* text area */}
            <span className="flex-1 capitalize flex items-center">{title}</span>
        </Link>
    );
}

