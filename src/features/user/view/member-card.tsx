import { IUser } from "@/interfaces/user";
import { User } from "lucide-react";

const MemberCard = ({user}:{user:IUser}) => 
<div className="text-sm text-muted-foreground flex items-center gap-5 rounded-md p-5 hover:bg-slate-300 transition duration-600">
    <User size={24}/>
    <h2 className="text-xl">{user.username}</h2>  
</div>

export default MemberCard