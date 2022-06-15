import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 75%;
  padding-left: ${({ theme }) => theme.spacing.s};
  padding-right: ${({ theme }) => theme.spacing.s};
`;

const Container = (props: React.PropsWithChildren) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;
