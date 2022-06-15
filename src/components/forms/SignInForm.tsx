import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import StyledFormContainer from "../containers/FormContainer";
import { Button } from "../controls";
import InputContainer from "../controls/Input";
import { ErrorText, FormHeader } from "../typography";
import { signInSchema } from "../../utils/schemas";

export default function SignInForm() {
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signInSchema) });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <StyledFormContainer>
        <FormHeader>Sign In to Felix</FormHeader>

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputContainer
              {...field}
              marginBottom={"l"}
              inputProps={{
                placeholder: "Enter email",
                error: errors.email?.message && (
                  <ErrorText>{errors.email?.message}</ErrorText>
                ),
              }}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputContainer
              {...field}
              marginBottom={"l"}
              inputProps={{
                placeholder: "Enter password",
                error: errors.password?.message && (
                  <ErrorText>{errors.password?.message}</ErrorText>
                ),
              }}
            />
          )}
        />

        <Button type="submit">Login</Button>
      </StyledFormContainer>
    </form>
  );
}
