import React from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginStatus]);

  return (
    <Switch>
      <Route path="/authenticate" exact component={Authentication} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Redirect to="/authenticate" from="/" />
    </Switch>
  );
};

export default AllRoutes;
