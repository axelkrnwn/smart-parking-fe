import { Parking } from "@/interfaces/parking"
import axios from "axios"

const getAll = async ():Promise<Parking[]> => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/v1/parking/`, {
            withCredentials: true
        })
        console.log("parkings", res)
        if (res.status == 200){
            return res.data
        }
    } catch (error) {
        return []
    }
    return []
}

export {
    getAll
}
