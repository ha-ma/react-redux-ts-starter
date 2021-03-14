import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//  page componens
import Home from "../Pages/Home";
import Page1 from "../Pages/Page1";

//  styled components
import { Wrapper } from "./styles";

const App: React.FC = () => {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/page1" component={Page1} />
        </Switch>
      </Router>
    </Wrapper>
  );
};

export default App;
