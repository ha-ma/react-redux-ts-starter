import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from './components/Pages/Home';
import SignIn from './components/Pages/SignIn';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const isLoggedIn = true;
  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
            </header>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </>
        ) : (
          <>
            <Switch>
              <Route component={SignIn} />
            </Switch>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
