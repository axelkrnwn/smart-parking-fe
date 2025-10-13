import { Sidebar } from "./ui/sidebar";
import { Link } from "react-router-dom";
import useRoute from "@/hooks/use-route";
import { useAuth } from "@/hooks/use-auth";

const AppSidebar = () => {
    const auth = useAuth()
    const links = useRoute(auth?.user?.username ?? "")

  return (
    <Sidebar variant="sidebar" collapsible="offcanvas" className="bg-slate-700 border-r h-full p-5 flex flex-col space-y-4 justify-center items-center">
        <div className="p-5 flex flex-col w-4/5">
            <Link to={"/"}>
                <h1 className="mb-10 text-slate-200 text-start font-semibold">
                    Charles
                </h1>
            </Link>
            <div className="h-1/2 flex flex-col gap-y-2">
                {links.map(e => (
                    <Link to={e.to} className="w-full gap-x-2 h-auto justify-start flex items-center">
                        {e.icon} {e.name}
                    </Link>
                ))}
            </div>
        </div>
    </Sidebar>
  );
};

export default AppSidebar
