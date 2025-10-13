import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IUser } from "@/interfaces/user";
import { remove, restore } from "@/services/user-service";
import { User } from "lucide-react";
import { toast } from "sonner";

const UserCard = ({user}:{user:IUser}) => {

    const deleteUser = (id:string) => {
        remove(id).then(() => {
            toast("user deleted")
        }).catch(() => {
            toast("user deletion failed")
        })
    }
    const restoreUser = (id:string) => {
        restore(id).then(() => {
            toast("user restored")
        }).catch(() => {
            toast("user restoration failed")
        })
    }
    return (
        <Card className=" flex-1 transition-all hover:shadow-lg hover:scale-102 py-8 px-1 text-left w-2/5 ">
              <CardHeader className="flex items-center gap-4">
                <User />
                <CardTitle className="w-full text-md">{user.username} ({user.role})</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Contact: {user.email}</p>
                <p className="text-muted-foreground text-sm">Lives on {user.address}</p>
                <div className="mt-2 block">
                    {!user.isDeleted ? 
                    <Button className="w-1/2 bg-red-500" onClick={() => deleteUser(user.id)}>
                        Remove
                    </Button>:
                    <Button className="w-1/2 bg-green-500" onClick={() => restoreUser(user.id)}>
                        Restore
                    </Button>
                    }
                </div>
              </CardContent>
        </Card>
    )
}

export default UserCard