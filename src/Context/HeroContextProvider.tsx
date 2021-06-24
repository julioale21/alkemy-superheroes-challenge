import React, { useState } from "react";
import { HeroContext } from "./HeroContext";
import Hero from "../models/Hero";
import { HeroService } from "../services/HeroServise";
import { contextDefaultValues } from "./HeroContext";

const HeroContextProvider: React.FC = ({ children }) => {
  const [selectedHero, setSelectedHero] = useState<Hero>(contextDefaultValues.selectedHero);
  const [heros, setHeros] = useState<Hero[]>(contextDefaultValues.heros);
  const [searchText, setSearchText] = useState(contextDefaultValues.searchText);
  const [searchResult, setSearchResult] = useState<Hero[]>(contextDefaultValues.searchResult);
  const [filter, setFilter] = useState(contextDefaultValues.filter);

  const addHeros = (newValue: Hero[]) => {
    setHeros(newValue);
    HeroService.setHeros("heros", newValue);
  };

  const changeFilter = (newValue: string) => {
    HeroService.setItem("filter", newValue);
    setFilter(newValue);
  };

  const updateSearchValue = (newValue: string) => {
    HeroService.setItem("searchText", searchText);
    setSearchText(newValue);
  };

  const updateSearchResult = (newValue: Hero[]) => {
    HeroService.setHeros("searchResult", searchResult);
    setSearchResult(newValue);
  };

  return (
    <HeroContext.Provider
      value={{
        heros,
        filter,
        searchText,
        searchResult,
        selectedHero,
        addHeros,
        changeFilter,
        setSelectedHero,
        updateSearchResult,
        updateSearchValue,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export default HeroContextProvider;
