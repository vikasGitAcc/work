import Sidebar from "@/src/components/sidebar";
export default function page() {
    return (
        <div className="w-full min-h-screen grid grid-cols-[1fr_4fr] ">
            {/* Sidebar */}
            <aside className="bg-[#fafafa]">
                <Sidebar />
            </aside>
            {/* Main Content */}
            <main className="bg-red-500">
                             
            </main>
        </div>
    );
}