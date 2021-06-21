import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import LoginView from "./screens/LoginView";
import SearchView from "./screens/SearchView";
import { HeroContext } from "./Context/HeroContext";
import { HeroService } from "./services/HeroServise";
import HeroDetailView from "./screens/HeroDetailView/HeroDetailView";
import Home from "./screens/home/HomeView";
import Hero from "./models/Hero";

const initialState = {
  selectedHero: {} as Hero,
  heroes: HeroService.getHeroesFromLocal(),
  searchResult: JSON.parse(localStorage.getItem("searchResult") || "[]"),
  checkValue: localStorage.getItem("checkValue") || "all",
  searchText: localStorage.getItem("searchText") || "",
};

const App: React.FC = () => {
  const [selectedHero, setSelectedHero] = useState<Hero>(initialState.selectedHero);
  const [heroes, setHeroes] = useState<Hero[]>(initialState.heroes);
  const [searchText, setSearchText] = useState(initialState.searchText);
  const [searchResult, setSearchResult] = useState<Hero[]>(initialState.searchResult);
  const [checkValue, setCheckValue] = useState(initialState.checkValue);

  const token = HeroService.getTokenFromLocal();

  React.useEffect(() => {
    HeroService.setHeroesToLocal(heroes);
  }, [heroes]);

  React.useEffect(() => {
    localStorage.setItem("searchResult", JSON.stringify(searchResult));
  }, [searchResult]);

  React.useEffect(() => {
    localStorage.setItem("checkValue", checkValue);
  }, [checkValue]);

  React.useEffect(() => {
    localStorage.setItem("searchText", searchText);
  }, [searchText]);

  return (
    <HeroContext.Provider
      value={{
        selectedHero,
        heroes,
        searchText,
        searchResult,
        checkValue,
        setSelectedHero,
        setHeroes,
        setSearchText,
        setSearchResult,
        setCheckValue,
      }}
    >
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
