import { NavBar } from "../components/navbar";
import { useAppSelector } from "../hooks/store.hooks";
import Routes from "../routes";
import { TLink } from "../types/navbar.types";

const navLinks: TLink[] = [
  {
    to: "/sign-in",
    label: "Sign In",
  },
  {
    to: "/sign-up",
    label: "Sign Up",
  },
];

const authenticatedNavLinks: TLink[] = [
  {
    to: "/profile",
    label: "Profile",
  },
];

const Root = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <>
      <NavBar
        links={user.email ? authenticatedNavLinks : navLinks}
        auth={!!user.email}
      />
      <Routes />;
    </>
  );
};

export default Root;
