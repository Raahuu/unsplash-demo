import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Authentication from "../Container/Authentication";
import Dashboard from "../Container/Dashboard";

const AllRoutes = () => {
  return (
    <Switch>
      <Route path="/authenticate" exact component={Authentication} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Redirect to="/dashboard" from="/" />
    </Switch>
  );
};

export default AllRoutes;
