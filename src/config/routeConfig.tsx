import { ILink } from "@/interfaces/link"
import AccountDashboard from "@/pages/landing/admin"
import Course from "@/pages/course/course"
import CreateCourse from "@/pages/course/create-course"
import Landing from "@/pages/landing/landing"
import { Book, Home, Pencil } from "lucide-react"
import Teacher from "@/pages/landing/teacher"
import Student from "@/pages/landing/student"

const routeConfig:{[key:string]:ILink[]} = {
    "student":[
        {
            icon: <Home className="mr-2 h-4 w-4"/>,
            name: "Home",
            to: "/",
            element: <Student></Student>
        },
        {
            icon: <Book className="mr-2 h-4 w-4"/>,
            name: "Course",
            to: "/course",
            element: <Course />
        },
        
    ],
    "teacher":[
        {
            icon: <Home className="mr-2 h-4 w-4"/>,
            name: "Home",
            to: "/",
            element: <Teacher />
        },
        {
            icon: <Pencil className="mr-2 h-4 w-4"/>,
            name: "Add Course",
            to: "/course/create",
            element: <CreateCourse />
            
        },
        
    ],
    "admin":[
        {
            icon: <Home className="mr-2 h-4 w-4"/>,
            name: "Home",
            to: "/",
            element: <AccountDashboard />
        },
        {
            icon: <Book className="mr-2 h-4 w-4"/>,
            name: "Course",
            to: "/course",
            element: <Course />
        },
    ],
    "":[
        {
            icon: <Home className="mr-2 h-4 w-4"/>,
            name: "Home",
            to: "/",
            element: <Landing />
        },
        {
            icon: <Book className="mr-2 h-4 w-4"/>,
            name: "Course",
            to: "/course",
            element: <Course />
        },
    ]
}

export default routeConfig