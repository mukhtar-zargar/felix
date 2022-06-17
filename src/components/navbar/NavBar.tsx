import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../hooks/store.hooks";
import { cleanUser } from "../../store/user.slice";
import { INavBarProps, TLink } from "../../types/navbar.types";
import { Container } from "../containers";
import Nav from "./Nav";
import NavItem from "./NavItem";

const NavBar = (props: INavBarProps) => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const signOut = () => {
    console.log("signing out");
    dispatch(cleanUser());
    history.push("/");
  };

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
        {props.auth && (
          <NavItem to="#" onClick={signOut} danger>
            Sign out
          </NavItem>
        )}
      </Container>
    </Nav>
  );
};

export default NavBar;
