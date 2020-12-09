import React from "react";
import TileEditor from "./components/TileEditor/TileEditor";
import About from "./components/About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TileEditor />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/:currentCombination/:difficulty/:name?">
          <TileEditor />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
