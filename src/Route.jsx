import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "./Pages/Signin/Signin";
import Dashboard from "./Pages/Dashboard";
import Manageallocations from "./Pages/Manageallocations";
import Users from "./Pages/Users";
import Allocate from "./Pages/allocate";
import {
  PrivateRoute,
} from "./auth/Privateroute";



const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} /> 
       <PrivateRoute
          path="/dashboard"
          exact
          component={Dashboard}
        />
         <PrivateRoute
          path="/manageallocations"
          exact
          component={Manageallocations}
        />
          <PrivateRoute
          path="/allocate"
          exact
          component={Allocate}
        />
         <PrivateRoute
          path="/users"
          exact
          component={Users}
        />
       
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
