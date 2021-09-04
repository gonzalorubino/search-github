import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import SearchHome from "../SearchHome";
import SearchShow from "../SearchShow";

import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => (
  <main>
    <Container className="p-3">
      <Switch>
        <Route exact path="/" component={SearchHome} />
        <Route path="/search" component={SearchShow} />
      </Switch>
    </Container>
  </main>
);

export default Main;
