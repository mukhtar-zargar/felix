import { NavBar } from "../components/navbar";
import Routes from "../routes";
import { TLink } from "../types/navbar.types";

const navLinks: TLink[] = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/sign-in",
    label: "Sign In",
  },
  {
    to: "/sign-up",
    label: "Sign Up",
  },
];

const Root = () => {
  return (
    <>
      <NavBar links={navLinks} />
      <Routes />;
    </>
  );
};

export default Root;
