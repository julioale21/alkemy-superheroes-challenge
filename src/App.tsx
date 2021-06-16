import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import LoginView from "./screens/LoginView";
import SearchView from "./screens/SearchView";
import Home from "./screens/home/HomeView";
import { HeroContext } from "./HeroContext";
import Hero from "./models/Hero";
import HeroDetailView from "./screens/HeroDetailView";

const initialState = JSON.parse(localStorage.getItem("heroes") || "[]");

const App: React.FC = () => {
  const [selectedHero, setSelectedHero] = React.useState<Hero>({} as Hero);
  const [heroes, setHeroes] = React.useState<Hero[]>(initialState);

  const token = localStorage.getItem("token");

  React.useEffect(() => {
    localStorage.setItem("heroes", JSON.stringify(heroes));
  }, [heroes]);

  return (
    <HeroContext.Provider value={{ selectedHero, heroes, setSelectedHero, setHeroes }}>
      <Router>
        <div className="App">
          {!token && <Redirect to="/login" />}
          <Switch>
            <Route path="/detail">
              <HeroDetailView />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/login">
              {token && <Redirect to="/home" />}
              <LoginView />
            </Route>

            <Route path="/search">
              <SearchView />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </HeroContext.Provider>
  );
};

export default App;
