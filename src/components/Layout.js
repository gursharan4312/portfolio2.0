import React from "react";
import Homepage from "./HomePage";
import { Switch, Route } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}
