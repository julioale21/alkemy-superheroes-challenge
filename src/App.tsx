import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Detail from "./screens/Detail";
import Login from "./screens/Login";
import Search from "./screens/Search";
import Home from "./screens/home";
import AppLayout from "./components/AppLayout";
import useSession from "./hooks/useSession";
import HeroContextProvider from "./Context/HeroContextProvider";
import "./App.css";

const App: React.FC = () => {
  const { handleLogOut, getToken } = useSession();
  const token = getToken();

  return (
    <HeroContextProvider>
      <Router>
        {!token && <Redirect to="/login" />}
        <Switch>
          <Route path="/login">
            {token && <Redirect to="/home" />}
            <Login />
          </Route>

          <Route>
            <AppLayout onExit={handleLogOut}>
              <Switch>
                <Route exact component={Home} path="/home" />
                <Route component={Search} path="/search" />
                <Route component={Detail} path="/hero/:id" />
                <Route path="/">
                  <Redirect to="/home" />
                </Route>
              </Switch>
            </AppLayout>
          </Route>
        </Switch>
      </Router>
    </HeroContextProvider>
  );
};

export default App;
