import { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledInnerContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  width: 400px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 5px 24px -5px rgba(71, 71, 71, 1); ;
`;

const StyledFormContainer = (props: PropsWithChildren) => {
  return (
    <StyledContainer>
      <StyledInnerContainer {...props} />
    </StyledContainer>
  );
};

export default StyledFormContainer;
