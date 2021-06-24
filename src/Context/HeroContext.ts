import { createContext } from "react";
import Hero from "../models/Hero";

type HeroContextValues = {
  selectedHero: Hero;
  setSelectedHero: (hero: Hero) => void;
  heros: Hero[];
  setHeros: (heros: Hero[]) => void;
  searchText: string;
  setSearchText: (text: string) => void;
  searchResult: Hero[];
  setSearchResult: (heros: Hero[]) => void;
  filter: string;
  setFilter: (value: string) => void;
};

const initialState: HeroContextValues = {
  selectedHero: {} as Hero,
  heros: [],
  searchResult: [] as Hero[],
  filter: "all",
  searchText: "",
  setSelectedHero: () => {},
  setHeros: () => {},
  setSearchResult: () => {},
  setFilter: () => {},
  setSearchText: () => {},
};

export const HeroContext = createContext<HeroContextValues>(initialState);
