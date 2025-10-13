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
const doLogin = async (dto:LoginFormValues) => {
    console.log(dto)
    // console.log(`${import.meta.env.VITE_BASE_URL}:${import.meta.env.VITE_BASE_URL}/users/login`)
    try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, dto)
        // console.log(res.data)
        window.localStorage.setItem('token', res.data.access_token)
        if (res.status == 200){
            return res
        }
    } catch (error) {
        throw new Error("Email or password incorrect!")
    }
}

const me = async() => {
    const token= getToken()

    if (!token) return
    
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/me`, {
            headers: {
            Authorization: `Bearer ${token}`
            }
        });
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
    me,
    getAll,
    remove,
    restore
}