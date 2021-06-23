import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { HeroContext } from "./Context/HeroContext";
// import { HeroService } from "./services/HeroServise";
import HeroDetailView from "./screens/HeroDetailView/HeroDetailView";
import LoginView from "./screens/LoginView";
import SearchView from "./screens/SearchView/SearchView";
import Home from "./screens/home/HomeView";
// import Hero from "./models/Hero";
import "./App.css";
import AppLayout from "./components/AppLayout/AppLayout";
import useSession from "./hooks/useSession";
import useHeroes from "./hooks/useHeroes";

const App: React.FC = () => {
  const { handleLogOut, getToken } = useSession();
  const {
    selectedHero,
    setSelectedHero,
    heroes,
    setHeroes,
    searchText,
    setSearchText,
    searchResult,
    setSearchResult,
    filter,
    setFilter,
  } = useHeroes();

  const token = getToken();

  return (
    <HeroContext.Provider
      value={{
        selectedHero,
        heroes,
        searchText,
        searchResult,
        filter,
        setSelectedHero,
        setHeroes,
        setSearchText,
        setSearchResult,
        setFilter,
      }}
    >
      <Router>
        <div className="App">
          {/* <Header onClosePressed={handleLogOut} /> */}
          {!token && <Redirect to="/login" />}
          <Switch>
            <Route path="/login">
              {token && <Redirect to="/home" />}
              <LoginView />
            </Route>

            <Route>
              <AppLayout onExit={handleLogOut}>
                <Switch>
                  <Route exact component={Home} path="/home" />
                  <Route component={SearchView} path="/search" />
                  <Route component={HeroDetailView} path="/detail" />
                  <Route path="/">
                    <Redirect to="/home" />
                  </Route>
                </Switch>
              </AppLayout>
            </Route>
          </Switch>
        </div>
      </Router>
    </HeroContext.Provider>
  );
};

export default App;
