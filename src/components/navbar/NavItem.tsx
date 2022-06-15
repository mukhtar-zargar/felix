import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

const Item = styled.li`
  float: left;
  padding: ${(props) => props.theme.spacing.l};
  & a {
    /* display: block; */
    color: ${(props) => props.theme.colors.foreground};

    &:hover {
      color: ${(props) => props.theme.colors.primaryDark};
    }
  }
`;

const NavItem = (props: LinkProps) => {
  return (
    <Item>
      <Link {...props}></Link>
    </Item>
  );
};

export default NavItem;
