import { LiHTMLAttributes } from "react";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

interface ItemProps extends LiHTMLAttributes<HTMLLIElement> {
  danger?: boolean;
}

const Item = styled.li<ItemProps>`
  float: left;
  padding: ${(p) => p.theme.spacing.l};
  & a {
    /* display: block; */
    color: ${(p) => p.theme.colors.foreground};

    &:hover {
      color: ${(p) =>
        p.danger ? p.theme.colors.error : p.theme.colors.primaryDark};
    }
  }
`;

interface CustomLinkProps extends LinkProps {
  danger?: boolean;
}

const NavItem = (props: CustomLinkProps) => {
  return (
    <Item danger={props.danger}>
      <Link {...props}></Link>
    </Item>
  );
};

export default NavItem;
