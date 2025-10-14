import { Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/components/Sidebar";
import MobileNav from "../pages/dashboard/components/MobileNav";
import ScrollToTop from "../components/ScrollToTop";

const DashboardLayout = () => {
    return (
        <main className="h-screen w-full flex items-center">
            <ScrollToTop />
            <aside className="w-[20%] hidden sm:block">
                <Sidebar />
            </aside>
            <section className="w-full sm:w-[80%] h-screen overflow-y-scroll scrollbar-none bg-black">
                <Outlet />
            </section>

            <MobileNav />
        </main>
    )
}

export default DashboardLayout;