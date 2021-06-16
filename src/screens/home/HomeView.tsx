import React from "react";
import { HeroContext } from "../../HeroContext";
import { useHistory } from "react-router-dom";
import AddHeroCard from "../../components/home/AddHeroCard";
import HeroCard from "../../components/Hero/HeroCard";
import usePowerStats from "../../components/Hero/usePowerStats";
import Hero from "../../models/Hero";
import PowerStatCounter from "../../components/home/PowerStatCounter";
import "./index.css";

const HomeView: React.FC = () => {
  const { heroes, setHeroes, setSelectedHero } = React.useContext(HeroContext);
  const history = useHistory();

  const { powerstats, averageWeight, averageHeight, sortedArray } = usePowerStats(heroes);

  const handleAddClick = () => {
    history.push("/search");
  };

  const handleSelectedHero = (hero: Hero) => {
    setSelectedHero(hero);
    history.push("/detail");
  };

  const handleRemoveHero = (hero: Hero) => {
    setHeroes(heroes.filter((item) => item.id !== hero.id));
  };

  return (
    <div className="h-100 d-flex flex-column align-items-center">
      <div className="powerstats-sections w-100 min-vh-100 d-flex flex-column align-items-center justify-content-around text-white">
        <h2 className="text-uppercase fw-bold">Powerstats</h2>
        <div className="row w-100">
          {Object.keys(sortedArray).map((key) => (
            <PowerStatCounter key={key} name={key} value={powerstats[key]} />
          ))}
        </div>
        <div className="averages w-100 d-flex flex-row justify-content-around">
          <div data-aos="fade-up">
            <h3>Weight</h3>
            <p>{averageWeight.toFixed(2)} Kg</p>
          </div>
          <div data-aos="fade-up">
            <h3>Height</h3>
            <p>{averageHeight.toFixed(2)} cm</p>
          </div>
        </div>
      </div>

      <div className="my-team-section h-100 w-100 min-vh-100 bg-black">
        <div className="row w-100 mx-auto d-flex justify-content-center ">
          {heroes.map((hero) => (
            <HeroCard
              key={hero.id}
              hero={hero}
              onHeroSelected={() => handleSelectedHero(hero)}
              onRemoveSelected={() => handleRemoveHero(hero)}
            />
          ))}

          {heroes.length < 6 && <AddHeroCard onAddClick={handleAddClick} />}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
