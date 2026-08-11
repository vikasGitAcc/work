import { ChevronDown, ChevronsUpDown, LayoutGrid, GalleryVerticalEnd } from "lucide-react";
import Workspace from "./workspace";

export default function Sidebar() {

  const randomData=[
    {
        title: "tasks",
        address:"/",
        icon:<LayoutGrid />,
        active: false
    },
    {
        title: "projects",
        address:"/",
        icon:<GalleryVerticalEnd />,
        active: true
    }
  ]

  return (
    <div className="w-full h-full border-r border-[#FAFAFA]">
      <header className="w-full flex p-2">
        <div className="px-3 gap-2 w-full flex justify-between py-2 items-center ">
          {/* Logo */}
          <div className="w-8 h-8 bg-transparent">
            <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4864.jpg?w=2000" alt="logo" className="w-full h-full rounded-full" />
          </div>
          {/** Title */}
          <div className="flex flex-1 items-center">
            <span className="leading-none font-semibold text-sm text-[#0A0A0A]">
              Dexter
            </span>
          </div>
          <div className="w-4 h-4 flex justify-center items-center shrink-0">
            <ChevronsUpDown className="h-4 w-4" width={16} height={16} />
          </div>
        </div>
      </header>
      <main className="w-full p-2">
        {/*workspace text*/}
           <div className="flex px-3 h-8 justify-between items-center">
                 <span className="text-sm font-medium leading-none flex-1 capitalize">
                    Workspace
                 </span>
                 {/* dropdown icon */}
                 <div className="flex items-center justify-center">
                    <ChevronDown width={16} height={16}/>                       
                 </div>
           </div>
           {/* items */}
           <div className="w-full flex flex-col">
                {randomData.map((item, index) => (
                    <div key={index} className="w-full">
                       <Workspace title={item.title} icon={item.icon} address={item.address} active={item.active} />
                    </div>
                ))}
           </div>
      </main>
    </div>
  );
}
