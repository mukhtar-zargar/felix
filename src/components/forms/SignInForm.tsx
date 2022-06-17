import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import StyledFormContainer from "../containers/FormContainer";
import { Button } from "../controls";
import InputContainer from "../controls/Input";
import { ErrorText, FormHeader } from "../typography";
import { signInSchema } from "../../utils/schemas";
import { ISignIn } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks/store.hooks";
import { updateUser } from "../../store/user.slice";
import { useHistory } from "react-router-dom";

export default function SignInForm() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const userList = useAppSelector((state) => state.userList);

  const {
    handleSubmit,
    // watch,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signInSchema) });

  const onSubmit = (data: ISignIn) => {
    const user = userList.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (user) {
      console.log("Sign in success");
      dispatch(updateUser(user));
      history.push("/profile"); // or replace usually
      return;
    }

    console.log("Invalid email or password");
  };

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
                type: "password",
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
