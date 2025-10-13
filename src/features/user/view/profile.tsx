import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useAuth } from "@/hooks/use-auth"
import { IUser } from "@/interfaces/user"
import { me } from "@/services/user-service"
import { User } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const ProfileCard = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const auth = useAuth()
    const navigate = useNavigate()

    const fetchUser = async () => {
        const res = await me()
        setUser(res?.data)
    }
    const logout = async () =>{
        auth?.logout().then(() => navigate('/'))
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (user && <Card className="w-full flex justify-center items-center max-w-1/4 shadow-lg p-6 bg-white">
        <div className="flex items-center justify-center aspect-square gap-6 border-2 rounded-md border-slate-100 shadow-md">
            <div className="flex flex-col items-center p-5">
                <User size={100}/>
                <h2 className="text-3xl font-semibold">{user.username}</h2>
            </div>
        </div>

        <CardContent className="space-y-1 w-full">
          <div className="border-b-2 border-gray-100 w-full py-5">
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>
          <Button onClick={logout} className="bg-red-500">
            Logout
          </Button>
        </CardContent>
      </Card>)
}

export default ProfileCard