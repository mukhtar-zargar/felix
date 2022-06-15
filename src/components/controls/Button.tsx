import styled from "styled-components";
import { IButtonProps } from "../../types";

const StyledBaseButton = styled.button`
  border: 0;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.base}
    ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.base};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;
const Button = (props: IButtonProps) => {
  return <StyledBaseButton {...props} />;
};

export default Button;
