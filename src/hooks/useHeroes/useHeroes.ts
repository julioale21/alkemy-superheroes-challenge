import { HeroService } from "../../services/HeroServise";
import { useState } from "react";
import Hero from "../../models/Hero";
import React from "react";

const useHeroes = () => {
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

  return {
    heroes,
    selectedHero,
    searchText,
    searchResult,
    filter,
    setSelectedHero,
    setHeroes,
    setSearchText,
    setSearchResult,
    setFilter,
  };
};

export default useHeroes;
