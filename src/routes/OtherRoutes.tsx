import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Multas from "../pages/Multas";

const OtherRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/multas" component={Multas} />
      </Switch>
    </BrowserRouter>
  );
};

export default OtherRoutes;
