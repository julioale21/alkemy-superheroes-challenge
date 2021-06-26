import React from "react";
import { HeroContext } from "../../Context/HeroContext";
import Hero from "../../models/Hero";
import axios from "axios";

const searchUrl = import.meta.env.VITE_SEARCH_URL;

const useSearch = () => {
  const {
    filter,
    searchText,
    searchResult,
    changeFilter,
    setSelectedHero,
    updateSearchValue,
    updateSearchResult,
  } = React.useContext(HeroContext);

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (value: string) => {
    setLoading(true);
    updateSearchValue(value);
    updateSearchResult([]);

    const response = await axios.get(searchUrl + value);
    const data: Hero[] = response.data.results;

    if (!data) {
      setLoading(false);

      return;
    }
    const filteredHeros = data.filter((hero) => {
      if (filter === "all") {
        return hero;
      }

      return hero.biography.alignment === filter;
    });

    updateSearchResult(filteredHeros);
    setLoading(false);
  };

  const handleCheckButtonChanged = (e: React.FormEvent<HTMLInputElement>) => {
    changeFilter(e.currentTarget.value);
  };

  return {
    searchText,
    loading,
    filter,
    searchResult,
    setSelectedHero,
    handleSubmit,
    handleCheckButtonChanged,
  };
};

export default useSearch;
