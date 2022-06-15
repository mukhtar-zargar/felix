import styled from "styled-components";

export const ErrorText = styled.p`
  margin-bottom: 0;
  margin-top: ${({ theme }) => theme.spacing.xxs};
  font-size: small;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.error};
`;
