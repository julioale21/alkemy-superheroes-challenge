import React from "react";
import { useHistory } from "react-router-dom";
import { HeroContext } from "../../Context/HeroContext";
import Hero from "../../models/Hero";
import axios from "axios";

const searchUrl = import.meta.env.VITE_SEARCH_URL;

const useSearch = () => {
  const history = useHistory();
  const {
    setSelectedHero,
    searchText,
    setSearchText,
    searchResult,
    setSearchResult,
    filter,
    setFilter,
  } = React.useContext(HeroContext);

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSearchResult([]);

    const response = await axios.get(searchUrl + searchText);
    const data: Hero[] = response.data.results;

    if (!data) {
      return;
    }
    const filteredHeroes = data.filter((hero) => {
      if (filter === "all") {
        return hero;
      }

      return hero.biography.alignment === filter;
    });

    setSearchResult(filteredHeroes);
    setLoading(false);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
    if (e.currentTarget.value === "") {
      setSearchResult([]);
    }
  };

  const handleSelectedHero = (hero: Hero) => {
    setSelectedHero(hero);
    history.push(`/hero/${hero.id}`);
  };

  const handleCheckButtonChanged = (e: React.FormEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };

  return {
    searchText,
    loading,
    filter,
    searchResult,
    setSelectedHero,
    handleChange,
    handleSubmit,
    handleSelectedHero,
    handleCheckButtonChanged,
  };
};

export default useSearch;
