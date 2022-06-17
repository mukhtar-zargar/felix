import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { nanoid } from "nanoid";

import StyledFormContainer from "../containers/FormContainer";
import { Button } from "../controls";
import InputContainer from "../controls/Input";
import { ErrorText, FormHeader } from "../typography";
import { signUpSchema } from "../../utils/schemas";
import { IUser } from "../../models/user.model";
import { useAppDispatch } from "../../hooks/store.hooks";
import { addUser } from "../../store/userList.slice";
import { useHistory } from "react-router-dom";

export default function SignUpForm() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const {
    handleSubmit,
    // watch,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) });

  const onSubmit = (data: IUser) => {
    data.id = nanoid();
    dispatch(addUser(data));
    history.push("/sign-in"); // or replace usually
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <StyledFormContainer>
        <FormHeader>Sign Up for Felix</FormHeader>

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
          name="name"
          control={control}
          render={({ field }) => (
            <InputContainer
              {...field}
              marginBottom={"l"}
              inputProps={{
                placeholder: "Enter name",
                error: errors.name?.message && (
                  <ErrorText>{errors.name?.message}</ErrorText>
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

        <Button type="submit">Sign Up</Button>
      </StyledFormContainer>
    </form>
  );
}
