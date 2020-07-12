import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Authentication from "../Container/Authentication";
import Dashboard from "../Container/Dashboard";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AllRoutes = () => {
  const history = useHistory();
  const loginStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (!loginStatus || loginStatus === "Incorrect") {
      history.push("/authenticate");
    }
  }, [loginStatus]);

  return (
    <Switch>
      <Route path="/authenticate" exact component={Authentication} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route exact path="/" render={() => <h2>Boiler plate Home</h2>} />
    </Switch>
  );
};

export default AllRoutes;
