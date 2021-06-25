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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    updateSearchResult([]);

    const response = await axios.get(searchUrl + searchText);
    const data: Hero[] = response.data.results;

    if (!data) {
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

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    updateSearchValue(e.currentTarget.value);
    if (e.currentTarget.value === "") {
      updateSearchResult([]);
    }
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
    handleChange,
    handleSubmit,
    handleCheckButtonChanged,
  };
};

export default useSearch;
