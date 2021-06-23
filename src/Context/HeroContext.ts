import { createContext } from "react";
import Hero from "../models/Hero";

type HeroContextValues = {
  selectedHero: Hero;
  setSelectedHero: (hero: Hero) => void;
  heroes: Hero[];
  setHeroes: (heroes: Hero[]) => void;
  searchText: string;
  setSearchText: (text: string) => void;
  searchResult: Hero[];
  setSearchResult: (heroes: Hero[]) => void;
  filter: string;
  setFilter: (value: string) => void;
};

const initialState: HeroContextValues = {
  selectedHero: {} as Hero,
  heroes: [],
  searchResult: [] as Hero[],
  filter: "all",
  searchText: "",
  setSelectedHero: () => {},
  setHeroes: () => {},
  setSearchResult: () => {},
  setFilter: () => {},
  setSearchText: () => {},
};

export const HeroContext = createContext<HeroContextValues>(initialState);
