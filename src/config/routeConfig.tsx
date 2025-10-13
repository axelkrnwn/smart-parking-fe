import { ILink } from "@/interfaces/link"
import AdminPage from "@/pages/landing/admin"
import Landing from "@/pages/landing/landing"
import { Home } from "lucide-react"

const routeConfig:{[key:string]:ILink[]} = {
    // "user":[
    //     {
    //         icon: <Home className="mr-2 h-4 w-4"/>,
    //         name: "Home",
    //         to: "/",
    //         element: <Student></Student>
    //     },
    // ],
    "admin":[
        {
            icon: <Home className="mr-2 h-4 w-4"/>,
            name: "Home",
            to: "/",
            element: <AdminPage />
        },
    ],
    "":[
        {
            icon: <Home className="mr-2 h-4 w-4"/>,
            name: "Home",
            to: "/",
            element: <Landing />
        },
    ]
}

export default routeConfig