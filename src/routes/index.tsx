import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignIn from "../pages/register/SignIn";
import SignUp from "../pages/register/SignUp";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/sign-in"} component={SignIn} />
      <Route exact path={"/sign-up"} component={SignUp} />
      <Route exact path={"/profile"} component={Profile} />
    </Switch>
  );
};

export default Routes;
