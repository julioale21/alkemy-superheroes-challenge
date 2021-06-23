import React from "react";
import SearchForm from "../../components/SearchForm";
import HeroList from "../../components/Hero/HeroList";
import bgImage from "../../assets/bg-search.jpg";
import useSearch from "../../hooks/useSearch";

const SearchView: React.FC = () => {
  const {
    filter,
    searchText,
    loading,
    searchResult,
    handleCheckButtonChanged,
    handleSubmit,
    handleChange,
    handleSelectedHero,
  } = useSearch();

  return (
    <div
      className="h-100 min-vh-100 overflow-hidden d-flex flex-column justify-content-start pb-5"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="h-100 mt-5 pt-5">
        <SearchForm
          checkValue={filter}
          value={searchText}
          onCheckButtonChanged={handleCheckButtonChanged}
          onFormSubmit={(e) => handleSubmit(e)}
          onInputChange={(e) => handleChange(e)}
        />

        {!loading && <HeroList heroes={searchResult} onHeroSelected={handleSelectedHero} />}
      </div>
    </div>
  );
};

export default SearchView;
