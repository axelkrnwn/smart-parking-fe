
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IUser } from "@/interfaces/user";
import { User } from "lucide-react";

const UserCard = ({user}:{user:IUser}) => {

    return (
        <Card className=" flex-1 transition-all hover:shadow-lg hover:scale-102 py-8 px-1 text-left w-2/5 ">
              <CardHeader className="flex items-center gap-4">
                <User />
                <CardTitle className="w-full text-md">{user.username}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Contact: {user.email}</p>
              </CardContent>
        </Card>
    )
}

export default UserCard