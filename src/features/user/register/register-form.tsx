import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { RegisterFormValues } from "@/interfaces/user";
import Field from "@/components/ui/field";
import SelectField from "@/components/ui/select-field";
import { SelectValue } from "@/interfaces/form-prop";
import { register } from "@/services/user-service";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import getToken from "@/lib/token";

export default function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "student",
      address: "",
    },
  });
  const navigate = useNavigate()

  useEffect(() => {
      if (getToken()){
        navigate('/')
      }
    }, [])

  const onSubmit = async (values: RegisterFormValues) => {
    if (values.password !== values.confirmPassword) {
      toast('Password must be the same as confirmation password')
      return
    }
    try{
      const res = await register(values)
      console.log(res)
      
      if (res && res.status == 201){
          toast("Register success. You will be redirected soon")
          setTimeout(() => {
            navigate('/')
          }, 3000);
          return;
      }
    }catch(error){
      toast(`Register failed. Reason: ${error}`)
    }
  };

  const roles:SelectValue<"student" | "teacher">[]=[
    {
        value:"student",
        text:"student"
    },
    {
        value:"teacher",
        text:"teacher"
    },
  ]

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 bg-background p-6 rounded-lg shadow max-w-md mx-auto">
        <div className="flex justify-between w-full gap-2">
            <Field  control={form.control} name="username" type="text" placeholder="your username" label="Username" />
            <Field  control={form.control} name="email" type="email" placeholder="email@example.com" label="Email"/>
        </div>
        <div className="flex justify-between w-full gap-2">
            <Field control={form.control} name="password" type="password"  placeholder="..." label="Password"/>
            <Field control={form.control} name="confirmPassword" label="Confirm Password" type="password" placeholder="..."/>
        </div>
        <Field control={form.control} name="address" label="Address" type="text" placeholder="1234 Placeholder St." />
        <SelectField control={form.control} name={"role"} label="Register as" values={roles}/>
        <Button type="submit" className="w-full bg-slate-700 text-white hover:text-slate-700" variant={"secondary"}>Create Account</Button>
      </form>
      <Toaster />
    </Form>
  );
}
