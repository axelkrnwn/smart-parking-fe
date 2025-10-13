import { LoginFormValues, RegisterFormValues } from "@/interfaces/user";
import getToken from "@/lib/token";
import axios from 'axios'

const register = async (dto:RegisterFormValues) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users`, dto)
        // window.localStorage.setItem('token', res.data.access_token)
        return res
    } catch (error) {
        console.log(error)
        throw new Error("Register failed")
    }
}

const doLogout = async () => {
    console.log('here')
    try {
        let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/v1/user/logout`, {}, {
            withCredentials: true
        })
        console.log(res)
        
    } catch (error) {
        console.log(error)
    }
}

const doLogin = async (dto:LoginFormValues) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/v1/user/login`, dto, {
            withCredentials: true
        })
        console.log("Login", res)
        if (res.status == 200){
            return res
        }
    } catch (error) {
        throw new Error("Email or password incorrect!")
    }
}

const me = async() => {
    
    try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/v1/user/me`, {
            withCredentials: true
        });
        console.log("ME", res)
        if (res.status == 200){
            return res
        }
    } catch (error) {
        throw new Error("Unexpected Error")
    }

}

const getAll = async () => {
    const token= getToken()

    if (!token) return []
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`,{
            headers: {
            Authorization: `Bearer ${token}`
            }
        })
        // window.localStorage.setItem('token', res.data.access_token)
        if (res.status == 200){
            return res.data
        }
    } catch (error) {
        return []
    }
}

const remove = async (id:string) => {
    const token= getToken()

    if (!token) return
    try {
        const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/users/${id}`,{
            headers: {
            Authorization: `Bearer ${token}`
            }
        })
        if (res.status == 200){
            return res
        }
    } catch (error) {
        throw new Error("Email or password incorrect!")
    }
}
const restore = async (id:string) => {
    const token= getToken()

    if (!token) return
    try {
        const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/users/${id}/restore`,{
            headers: {
            Authorization: `Bearer ${token}`
            }
        })
        if (res.status == 200){
            return res
        }
    } catch (error) {
        throw new Error("Email or password incorrect!")
    }
}

export {
    register,
    doLogin,
    doLogout,
    me,
    getAll,
    remove,
    restore
}