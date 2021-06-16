import React from "react";
import axios from "axios";
import { useHistory } from "react-router";

import SearchForm from "../components/search/SearchForm";
import Hero from "../models/Hero";
import HeroItemResult from "../components/search/HeroItemResult";
import { HeroContext } from "../HeroContext";

const apiKey = "10222145357517937";
const baseUrl = "https://superheroapi.com/api/";
const searchUrl = baseUrl + apiKey + "/search/";

const SearchView: React.FC = () => {
  const history = useHistory();

  const [heroName, setHeroName] = React.useState<string>("");
  const [result, setResult] = React.useState<Hero[] | null>(null);
  const { setSelectedHero } = React.useContext(HeroContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await axios.get(searchUrl + heroName);

    setResult(response.data.results);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setHeroName(e.currentTarget.value);
    if (e.currentTarget.value === "") {
      setResult(null);
    }
  };

  const handleSelectedHero = (hero: Hero) => {
    setSelectedHero(hero);
    history.push("/detail");
  };

  return (
    <div>
      <h1>Search hero</h1>
      <SearchForm onFormSubmit={(e) => handleSubmit(e)} onInputChange={(e) => handleChange(e)} />
      <div className="list-group mt-5 px-5">
        {result?.map((hero) => (
          <HeroItemResult
            key={hero.id}
            item={hero}
            onItemSelected={() => handleSelectedHero(hero)}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchView;
