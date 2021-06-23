import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { HeroContext } from "./Context/HeroContext";
import { HeroService } from "./services/HeroServise";
import HeroDetailView from "./screens/HeroDetailView/HeroDetailView";
import LoginView from "./screens/LoginView";
import SearchView from "./screens/SearchView";
import Home from "./screens/home/HomeView";
import Hero from "./models/Hero";
import "./App.css";
import AppRoute from "./components/AppRoute";
import AppLayout from "./components/AppLayout";

const initialState = {
  selectedHero: {} as Hero,
  heroes: HeroService.getHeroesFromLocalStorage("heroes"),
  searchResult: HeroService.getHeroesFromLocalStorage("searchResult"),
  checkValue: HeroService.getItemFromLocalStorage("checkValue") || "all",
  searchText: HeroService.getItemFromLocalStorage("searchText") || "",
};

const App: React.FC = () => {
  const [selectedHero, setSelectedHero] = useState<Hero>(initialState.selectedHero);
  const [heroes, setHeroes] = useState<Hero[]>(initialState.heroes);
  const [searchText, setSearchText] = useState(initialState.searchText);
  const [searchResult, setSearchResult] = useState<Hero[]>(initialState.searchResult);
  const [checkValue, setCheckValue] = useState(initialState.checkValue);

  const token = HeroService.getItemFromLocalStorage("token");

  React.useEffect(() => {
    HeroService.setHeroesToLocalStorage("heroes", heroes);
  }, [heroes]);

  React.useEffect(() => {
    HeroService.setHeroesToLocalStorage("searchResult", searchResult);
  }, [searchResult]);

  React.useEffect(() => {
    HeroService.setItemToLocalStorage("checkValue", checkValue);
  }, [checkValue]);

  React.useEffect(() => {
    HeroService.setItemToLocalStorage("searchText", searchText);
  }, [searchText]);

  // const handleLogOut = () => {
  //   HeroService.removeItemFromLocalStorage("token");
  //   window.location.reload(true);
  // };

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
          {/* <Header onClosePressed={handleLogOut} /> */}
          {!token && <Redirect to="/login" />}
          <Switch>
            <Route path="/detail">
              <HeroDetailView />
            </Route>

            {/* <Route path="/home">
              <Home />
            </Route> */}

            <AppRoute component={Home} layout={AppLayout} path="/home" />

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
