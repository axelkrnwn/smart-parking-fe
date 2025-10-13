import { createContext, useState, useEffect } from "react";
import { doLogin, me } from "@/services/user-service";
interface IUser {
    id: string;
    username: string;
    role: string;
};

interface IAuthContext {
  user: IUser | null;
  login: (email: string, password: string) => Promise<string>;
  logout: () => void;
};

const AuthContext = createContext<IAuthContext | undefined>(undefined);


const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const getUser = async () => {
    const currentUser = await me()
    setUser(currentUser?.data);
  }

  useEffect(() => {
    getUser()
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await doLogin({email:email,password:password})
      const currentUser = await me()
      console.log(currentUser)

      setUser({
        id: currentUser?.data.id,
        username: currentUser?.data.username,
        role:currentUser?.data.role
      })
    } catch (error) {
      if (error instanceof Error){
        return error.message
      }
      return "Unknown error"
    }
    return ""
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export {type IAuthContext, AuthContext, AuthProvider}
