import styled from "styled-components";
import { IContainerProps, IInputProps } from "../../types";

const StyledInputContainer = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) =>
    props.theme.spacing[props.marginBottom || "zero"]};
`;

const StyledInput = styled.input<IInputProps>`
  border: 0;
  outline: 0;
  flex: 1;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral3};
  ${({ error, theme }) => error && "border: 1px solid " + theme.colors.error};
  background-color: ${({ theme }) => theme.colors.neutral2};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.s}
    ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.s};

  &:focus {
    background-color: ${({ theme }) => theme.colors.neutral1};
  }
`;

interface InputContainerProps extends IContainerProps {
  inputProps: IInputProps;
}

const InputContainer = (props: InputContainerProps) => {
  return (
    <StyledInputContainer {...props}>
      <StyledInput {...props.inputProps} />
      {props.inputProps.error}
    </StyledInputContainer>
  );
};

export default InputContainer;
