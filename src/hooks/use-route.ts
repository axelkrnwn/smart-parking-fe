import routeConfig from "@/config/routeConfig"

const useRoute = (role:string) => {
    console.log(role)
    return routeConfig[role]
}

export default useRoute