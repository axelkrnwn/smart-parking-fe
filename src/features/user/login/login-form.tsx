import { Button } from "@/components/ui/button";
import { useAuth } from "../../../hooks/use-auth";
import { Form } from "@/components/ui/form";
import Field from "@/components/ui/field";
import { useForm } from "react-hook-form";
import { LoginFormValues } from "@/interfaces/user";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { useEffect } from "react";
import getToken from "@/lib/token";

export default function LoginForm() {
  const auth = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    if (getToken()){
      navigate('/')
    }
  }, [])
  
  const form = useForm<LoginFormValues>({
      defaultValues: {
        email: "",
        password: "",
      },
    });
  const onSubmit = async (values: LoginFormValues) => {
    console.log(auth)
    try {
      const result = await auth?.login(values.email, values.password);
      if(result == ""){
        toast("Login success. You will be redirected soon")
        setTimeout(() => {
          navigate('/')
        }, 3000);
        return;
      }
      toast(`Login failed. Reason: ${result}`)
    } catch (err) {
      toast("Unexpected error during login. Please try again later.")
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 bg-background p-6 rounded-lg shadow max-w-md mx-auto">
        <Field  control={form.control} name="email" type="email" placeholder="email@example.com" label="Email"/>
        <Field control={form.control} name="password" type="password"  placeholder="..." label="Password"/>
        <Button type="submit" className="w-full bg-slate-700 text-white hover:text-slate-700" variant={"secondary"}>Login</Button>
      </form>
      <Toaster className="fixed bottom-0 right-0"/>
    </Form>
  );
}
