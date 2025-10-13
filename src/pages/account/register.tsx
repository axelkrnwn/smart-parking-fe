import RegisterForm from "@/features/user/register/register-form";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen flex w-screen items-center justify-center bg-muted">
      <Link to="/" className="fixed top-0 left-0"><ArrowLeft size={40}/></Link>
      <div>
        <h1 className="text-3xl font-bold mb-6 text-center">Create an Account</h1>
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register