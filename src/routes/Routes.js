import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../App";
import About from "../components/About";

export const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
};
