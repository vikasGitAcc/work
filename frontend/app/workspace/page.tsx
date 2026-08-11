import Sidebar from "@/src/components/sidebar";
import WorkspaceContent from "@/src/components/WorkspaceContent";
export default function page() {
    return (
        <div className="w-full min-h-screen grid grid-cols-[1fr_4fr] ">
            {/* Sidebar */}
            <aside className="bg-[#fafafa]">
                <Sidebar />
            </aside>
            {/* Workspace Content */}
            <main className="">
                <WorkspaceContent />
            </main>
        </div>
    );
}