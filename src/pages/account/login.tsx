import LoginForm from "@/features/user/login/login-form";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Login =() => {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-muted">
            <Link to="/" className="fixed top-0 left-0"><ArrowLeft size={40}/></Link>
            <div>
                <h1 className="text-3xl font-bold mb-6 text-center">Welcome to LinKasa</h1>
                <LoginForm />
            </div>
        </div>
    );
}

export default Login