import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

const Item = styled.li`
  float: left;
  & a {
    display: block;
    padding: ${(props) => props.theme.spacing.l};
    color: ${(props) => props.theme.colors.foreground};

    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
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
