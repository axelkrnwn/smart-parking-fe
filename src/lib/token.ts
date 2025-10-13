export default function getToken(){
    const token = localStorage.getItem('token');

    if (!token){
        return
        // throw new Error('No token found');
    } 
    return token
}