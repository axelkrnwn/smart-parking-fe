import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { NavLink, Outlet } from "react-router-dom";
import AppSidebar from "@/components/app-sidebar";
import { useAuth } from "@/hooks/use-auth";

const MainLayout = () => {

    const auth = useAuth()
    return <>
        <SidebarProvider className="w-screen box-border h-full flex relative">
            <AppSidebar />
            <main className="bg-gray-200 w-full relative">
                <div className="flex py-5 h-[10vh] px-10 w-full justify-between box-border backdrop-blur-sm bg-white/10 sticky top-0 z-20">
                    <SidebarTrigger />
                    {auth?.user ? <NavLink to={"/profile"}>{auth.user.username}</NavLink>:<div className="flex gap-10">
                    <NavLink to={"/login"}>Sign In</NavLink>
                    <NavLink to={"/register"}>Register</NavLink>
                    </div>}
                </div>
                <Outlet />
            </main>
        </SidebarProvider>
    </>
}

export default MainLayout;

