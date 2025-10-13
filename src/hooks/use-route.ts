import routeConfig from "@/config/routeConfig"

const useRoute = (username:string) => {
    if (username !== '' && username !== 'admin') username = 'user'
    return routeConfig[username]
}

export default useRoute