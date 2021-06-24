import { HeroContextState } from "../types/HeroContextState";
import { createContext } from "react";
import Hero from "../models/Hero";
import { HeroService } from "../services/HeroServise";

export const contextDefaultValues: HeroContextState = {
  selectedHero: {} as Hero,
  heros: HeroService.getHeros("heros"),
  searchResult: HeroService.getHeros("searchResult"),
  filter: HeroService.getItem("filter") || "all",
  searchText: HeroService.getItem("searchText") || "",
  setSelectedHero: () => {},
  addHeros: () => {},
  updateSearchResult: () => {},
  changeFilter: () => {},
  updateSearchValue: () => {},
};

export const HeroContext = createContext<HeroContextState>(contextDefaultValues);
