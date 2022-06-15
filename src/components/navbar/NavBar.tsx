import { INavBarProps, TLink } from "../../types/navbar.types";
import { Container } from "../containers";
import Nav from "./Nav";
import NavItem from "./NavItem";

const NavBar = (props: INavBarProps) => {
  return (
    <Nav>
      <Container>
        {props.links &&
          props.links.map((item: TLink) => (
            <NavItem to={item.to}>{item.label}</NavItem>
          ))}
      </Container>
    </Nav>
  );
};

export default NavBar;
