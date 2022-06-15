import styled from "styled-components";

export const FormHeader = styled.p`
  font-size: large;
  font-weight: 400;
  padding-bottom: ${({ theme }) => theme.spacing.s};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral4};
`;

export const MainHeadline = styled.h1`
  font-size: large;
  font-weight: 500;
`;
