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

export default function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: LoginType) => {
    console.log(data);
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
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
          <input type="submit" value="Login" />
        </div>
      </form> */}
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
              <FieldLabel htmlFor="password" {...register("password")}>
                Password
              </FieldLabel>
              {errors.password && <p role="alert">{errors.password.message}</p>}
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
              <Input id="password" type="password" placeholder="••••••••" />
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
