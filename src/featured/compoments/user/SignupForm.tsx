import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "#components/ui/field";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema, type SignupType } from "./schema.tsx";
import { Input } from "#components/ui/input";
import { supabase } from "../../../shared/lib/supabase.ts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignupType>({
    resolver: zodResolver(SignupSchema),
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

 const onSubmit = async (data: SignupType) => {
  setLoading(true);
  const { data: authData, error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });
  setLoading(false);
   if (error) {
    console.error(error.message);
    setErrorMessage(error.message); 
    return;
  }
    if (authData.session === null) {
    setErrorMessage('Please check your email to confirm your account before logging in.');
    return;
  }
  loading
    console.log("Signed up!");
    console.error(errorMessage);
    navigate("/account");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldSet className="w-full max-w-xs flex justify-self-center m-10">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Email</FieldLabel>
              <FieldDescription>Enter an email.</FieldDescription>
              <Input
                id="email"
                type="email"
                placeholder="rusladulla@kauparusl.is"
                {...register("email")}
                className="bg-amber-50"
              />{" "}
              {errors.email && <p role="alert">{errors.email.message}</p>}
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              {errors.password && <p role="alert">{errors.password.message}</p>}
              <FieldDescription>
                Must be at least 6 characters long.
              </FieldDescription>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")} 
                className="bg-amber-50"
              />
              <p>
                {" "}
                <input type="checkbox" {...register("remember_me")} /> Remember
                me
              </p>
            </Field>
            <Field>
              <input type="submit" value="Sign Up" className="bg-amber-50"/>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </>
  );
}
