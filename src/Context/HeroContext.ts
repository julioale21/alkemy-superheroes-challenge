import { createContext } from "react";
import Hero from "../models/Hero";

type HeroContextValues = {
  selectedHero: Hero;
  setSelectedHero: (hero: Hero) => void;
  heroes: Hero[];
  setHeroes: (heroes: Hero[]) => void;
  searchResult: Hero[];
  setSearchResult: (heroes: Hero[]) => void;
  checkValue: string;
  setCheckValue: (value: string) => void;
};

const initialState: HeroContextValues = {
  selectedHero: {} as Hero,
  heroes: [],
  searchResult: [] as Hero[],
  checkValue: "all",
  setSelectedHero: () => {},
  setHeroes: () => {},
  setSearchResult: () => {},
  setCheckValue: () => {},
};

export const HeroContext = createContext<HeroContextValues>(initialState);
