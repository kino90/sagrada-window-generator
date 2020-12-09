import React from "react";
import Layout from "./components/Layout/Layout";
import WindowEditor from "./components/WindowEditor/WindowEditor";
import About from "./components/About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/">
            <WindowEditor />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/:currentCombination/:difficulty?/:name?">
            <WindowEditor />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
