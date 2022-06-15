import styled from "styled-components";

export const ErrorText = styled.p`
  margin-bottom: 0;
  margin-top: ${({ theme }) => theme.spacing.xxs};
  font-size: 11px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.error};
`;
