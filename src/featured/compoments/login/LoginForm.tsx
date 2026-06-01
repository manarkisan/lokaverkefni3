import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginType } from "./schema.tsx";

export default function App() {
  
  const { handleSubmit,register, formState: { errors } } = useForm({
    resolver: zodResolver(LoginSchema),
  })

  const onSubmit = (data: LoginType) => {
    console.log(data)
  }

  return (
     <form onSubmit={ handleSubmit(onSubmit) } >

        <div>
         <label htmlFor="email">Email</label>
         <input {...register("email")} />
          {errors.email && <p role="alert">{errors.email.message}</p>}
        </div>

        <div>
         <label htmlFor="password">Password</label>
         <input {...register("password")} />
          {errors.password && <p role="alert">{errors.password.message}</p>}
        </div>
        
        <div>
         <input type="submit" value="Login"/>
        </div>
     </form>
  )
}