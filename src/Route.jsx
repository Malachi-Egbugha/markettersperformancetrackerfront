import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "./Pages/Signin/Signin";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Manageallocations from "./Pages/Manageallocations/Manageallocations"
import Allocate from "./Pages/Allocate/allocate";



const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/dashboard" exact component={Dashboard} />
         <Route path="/manageallocations" exact component={Manageallocations} />
        <Route path="/allocate" exact component={Allocate} />
        
      
       
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
