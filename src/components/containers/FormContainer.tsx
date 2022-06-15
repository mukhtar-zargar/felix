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
  background-color: ${({ theme }) => theme.colors.neutral2};
  box-shadow: 0px 3px 8px -5px #313131; ;
`;

const StyledFormContainer = (props: PropsWithChildren) => {
  return (
    <StyledContainer>
      <StyledInnerContainer {...props} />
    </StyledContainer>
  );
};

export default StyledFormContainer;
