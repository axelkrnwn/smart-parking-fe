import axios from "axios"

async function post(endpoint:string, dto:any, token:string, contentType: string="multipart/form-data") {
    console.log(dto)
    console.log(typeof dto)
    try {
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/${endpoint}`, dto,  {
                headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': contentType
                }
            })
            if (res.status == 201){
                return res
            }
        } catch (error) {
            console.log(error)
            throw new Error("Invalid course data!")
        }
}

const patch = async (endpoint:string, dto:any, token:string, contentType:string='multipart/form-data') => {
    try {
            const res = await axios.patch(`${import.meta.env.VITE_BASE_URL}/${endpoint}`, dto,  {
                headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type':contentType
                }
            })
            if (res.status == 201){
                return res
            }
        } catch (error) {
            console.log(error)
            throw new Error("Invalid course data!")
        }
}


const remove = async (endpoint:string, token:string) => {
    try {
            const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/${endpoint}`,  {
                headers: {
                Authorization: `Bearer ${token}`
                }
            })
            if (res.status == 201){
                return res
            }
        } catch (error) {
            console.log(error)
            throw new Error("Invalid course data!")
        }
}

export {post, patch, remove}