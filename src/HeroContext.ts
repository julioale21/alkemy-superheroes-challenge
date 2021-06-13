import { createContext } from "react";
import Hero from "./models/Hero";

type HeroContextValues = {
  selectedHero: Hero;
  setSelectedHero: (hero: Hero) => void;
  heroes: Hero[];
  setHeroes: (heroes: Hero[]) => void;
};

const initialState: HeroContextValues = {
  selectedHero: {} as Hero,
  heroes: [],
  setSelectedHero: () => {},
  setHeroes: () => {},
};

export const HeroContext = createContext<HeroContextValues>(initialState);
