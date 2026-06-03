import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "#components/ui/field";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginType } from "./schema.tsx";
import { Input } from "#components/ui/input";
import { supabase } from "../../../shared/lib/supabase.ts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

  const onSubmit = async (data: LoginType) => {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });
    setLoading(false)
    if (error) {
      console.error(error.message);
      return;
    }
    console.log("Logged in!");
    navigate("/account")
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldSet className="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Email</FieldLabel>
              <FieldDescription>Enter an email.</FieldDescription>
              <Input
                id="email"
                type="email"
                placeholder="rusladulla@kauparusl.is"
                {...register("email")}
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
              />
              <p>
                {" "}
                <input type="checkbox" {...register("remember_me")} /> Remember
                me
              </p>
            </Field>
            <Field>
              <input type="submit" value="Login" />
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </>
  );
}
