import Hero from "../models/Hero";

export type HeroContextState = {
  heros: Hero[];
  filter: string;
  searchText: string;
  selectedHero: Hero;
  searchResult: Hero[];
  addHeros: (heros: Hero[]) => void;
  changeFilter: (value: string) => void;
  updateSearchResult: (heros: Hero[]) => void;
  setSelectedHero: (hero: Hero) => void;
  updateSearchValue: (text: string) => void;
};
