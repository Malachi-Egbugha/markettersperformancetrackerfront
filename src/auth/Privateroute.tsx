import { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import {
  isAuthenticated,
  
} from "./index";
type Props = {
    component: any;
}

export const PrivateRoute = ({ component: Component, ...rest }:Props) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

