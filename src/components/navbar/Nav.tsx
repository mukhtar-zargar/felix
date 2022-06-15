import styled from "styled-components";

import { NavProps } from "../../types/navbar.types";

const StyledNav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.neutral3};
`;

const Nav = (props: NavProps) => {
  return <StyledNav>{props.children}</StyledNav>;
};

export default Nav;
