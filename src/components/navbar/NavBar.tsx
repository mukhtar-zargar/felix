import { INavBarProps, TLink } from "../../types/navbar.types";
import { Container } from "../containers";
import Nav from "./Nav";
import NavItem from "./NavItem";

const NavBar = (props: INavBarProps) => {
  return (
    <Nav>
      <Container>
        <NavItem to={"/"}>Felix Media</NavItem>
        {props.links &&
          props.links.map((item: TLink, index: number) => (
            <NavItem key={`index-${index}`} to={item.to}>
              {item.label}
            </NavItem>
          ))}
      </Container>
    </Nav>
  );
};

export default NavBar;
