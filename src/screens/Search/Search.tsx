import React from "react";
import SearchForm from "../../components/SearchForm";
import HeroList from "../../components/Hero/HeroList";
import useSearch from "../../hooks/useSearch";
import useHero from "../../hooks/useHero";
import { useHistory } from "react-router-dom";
import Hero from "../../models/Hero";
import "./index.css";
import Spinner from "../../components/shared/Spinner";

const Search: React.FC = () => {
  const {
    filter,
    searchText,
    loading,
    searchResult,
    handleCheckButtonChanged,
    handleSubmit,
    handleChange,
  } = useSearch();

  const { addSelectedHero } = useHero();
  const history = useHistory();

  const handleSelectedHero = (hero: Hero) => {
    addSelectedHero(hero);
    history.push(`/hero/${hero.id}`);
  };

  return (
    <div className="search-section h-100 min-vh-100 overflow-hidden d-flex flex-column justify-content-start pb-5">
      <div className="h-100 mt-5 pt-5">
        <SearchForm
          checkValue={filter}
          value={searchText}
          onCheckButtonChanged={handleCheckButtonChanged}
          onFormSubmit={(e) => handleSubmit(e)}
          onInputChange={(e) => handleChange(e)}
        />

        {!loading ? (
          <HeroList heros={searchResult} onHeroSelected={handleSelectedHero} />
        ) : (
          <div className="mt-5 pt-5">
            <Spinner color="warning" />
            <p className="text-warning mt-2 fs-4">Loading ...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
