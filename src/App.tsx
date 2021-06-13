import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import LoginView from "./screens/LoginView";
import Home from "./screens/home/HomeView";

const App: React.FC = () => {
  const token = localStorage.getItem("token");

  /* if (!token) {
    return (
      <Router>
        <div className="App">
          <LoginView />
        </div>
      </Router>
    );
  } */

  return (
    <Router>
      <div className="App">
        {!token && <Redirect to="/login" />}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <LoginView />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
