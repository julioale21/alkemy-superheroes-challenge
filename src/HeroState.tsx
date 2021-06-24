import React, { useState } from "react";
import { HeroContext } from "./Context/HeroContext";
import Hero from "./models/Hero";
import { HeroService } from "./services/HeroServise";

const HeroState: React.FC = ({ children }) => {
  const initialState = {
    selectedHero: {} as Hero,
    heroes: HeroService.getHeroes("heroes"),
    searchResult: HeroService.getHeroes("searchResult"),
    filter: HeroService.getItem("filter") || "all",
    searchText: HeroService.getItem("searchText") || "",
  };

  const [selectedHero, setSelectedHero] = useState<Hero>(initialState.selectedHero);
  const [heroes, setHeroes] = useState<Hero[]>(initialState.heroes);
  const [searchText, setSearchText] = useState(initialState.searchText);
  const [searchResult, setSearchResult] = useState<Hero[]>(initialState.searchResult);
  const [filter, setFilter] = useState(initialState.filter);

  React.useEffect(() => {
    HeroService.setHeroes("heroes", heroes);
  }, [heroes]);

  React.useEffect(() => {
    HeroService.setHeroes("searchResult", searchResult);
  }, [searchResult]);

  React.useEffect(() => {
    HeroService.setItem("filter", filter);
  }, [filter]);

  React.useEffect(() => {
    HeroService.setItem("searchText", searchText);
  }, [searchText]);

  return (
    <HeroContext.Provider
      value={{
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
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export default HeroState;
