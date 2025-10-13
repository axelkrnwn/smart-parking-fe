import useUser from "@/hooks/use-user"
import UserCard from "./user-card"
import { Plus, Search } from "lucide-react"
import useSearchQuery from "@/hooks/use-search-query"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Toaster } from "sonner"


const UserList = () => {

    const users = useUser()
    const {query, onChange} = useSearchQuery()
    const [filter, setFilter] = useState('')

    return (<>
        <h1 className="text-left font-semibold my-2">Analytics</h1>
        <h2 className="text-left font-bold text-slate-600">User Count : {users.length}</h2>

            <div className="flex justify-between items-center w-full">
                <div className="mt-4 flex gap-5">
                    <div className="flex items-center bg-white px-3 py-2 gap-2 rounded-md w-full">
                        <Search className="text-gray-500 text-xl" />
                        <input type="text" placeholder="Search here..." className="outline-none" onChange={onChange} value={query}/>
                    </div>
                    <Link to={'/register'}>
                        <Button ><Plus /></Button>   
                    </Link>
                </div>    
            </div>
            <div>
                <div className="flex items-center w-full gap-5 my-5">
                    <div className="flex items-center space-x-2">
                        <input type="radio" name="role" value="teacher" id="r1" onClick={() => setFilter('teacher')}/> 
                        <label htmlFor="r1">Teacher</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="radio" name="role" value="student" id="r2" onClick={() => setFilter('student')}/>
                        <label htmlFor="r2">Student</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="radio" name="role" value="" id="r3" onClick={() => setFilter('')}/>
                        <label htmlFor="r3">All</label>
                    </div>
                </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-5 w-full justify-stretch">
                {query == ""?
                users.filter(e => filter == "" || e.role == filter).map(e => <UserCard user = {e} />):
                users.filter(e => e.username.includes(query)).filter(e => filter == "" || e.role == filter).map(e => <UserCard user={e} />)}
            </div>
            <Toaster />
    </>)
}

export default UserList