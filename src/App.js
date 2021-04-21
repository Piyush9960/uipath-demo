import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Registered from "./components/Registered";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/registered" component={Registered} />
    </Switch>
  );
}

export default App;
