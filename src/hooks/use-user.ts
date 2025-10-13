import { IUser } from "@/interfaces/user"
import { getAll } from "@/services/user-service"
import { useEffect, useState } from "react"

const useUser = () => {

    const [users, setUsers] = useState<IUser[]>([])

    const getUsers = async () => {
        let res = await getAll()
        setUsers(res)
    }
    useEffect(() => {
        console.log('hello')
        getUsers()
    }, [])

    return users
}

export default useUser