import React from "react";
import styled from "styled-components";

import { IContainerProps } from "../../types";

const StyledContainer = styled.div<IContainerProps>`
  margin-top: ${(props) => props.theme.spacing[props.marginTop || "zero"]};
  margin-right: auto;
  margin-left: auto;
  width: 75%;
  padding-left: ${({ theme }) => theme.spacing.s};
  padding-right: ${({ theme }) => theme.spacing.s};
`;

const Container = (props: IContainerProps) => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
};

export default Container;
