import { createContext } from "react";
import Hero from "../models/Hero";

type HeroContextValues = {
  selectedHero: Hero;
  setSelectedHero: (hero: Hero) => void;
  heroes: Hero[];
  setHeroes: (heroes: Hero[]) => void;
  searchResult: Hero[];
  setSearchResult: (heroes: Hero[]) => void;
};

const initialState: HeroContextValues = {
  selectedHero: {} as Hero,
  heroes: [],
  searchResult: [] as Hero[],
  setSelectedHero: () => {},
  setHeroes: () => {},
  setSearchResult: () => {},
};

export const HeroContext = createContext<HeroContextValues>(initialState);
