import React from "react";
import { HeroContext } from "../../Context/HeroContext";
import { useHistory } from "react-router-dom";
import PowerStatCounter from "../../components/Hero/PowerStatsItems/PowerStatCounter";
import usePowerStats from "../../hooks/usePowerStats";
import AddHeroCard from "../../components/Hero/AddHeroCard";
import HeroDetail from "../../components/Hero/HeroDetail";
import HeroCard from "../../components/Hero/HeroCard";
import Hero from "../../models/Hero";
import "./index.css";

const HomeView: React.FC = () => {
  const {
    heroes,
    setHeroes,
    selectedHero,
    setSelectedHero,
    setSearchResult,
    setSearchText,
    setCheckValue,
  } = React.useContext(HeroContext);
  const [modal, setModal] = React.useState(false);
  const history = useHistory();

  const { powerstats, averageWeight, averageHeight, sortedArray } = usePowerStats(heroes);

  const handleAddClick = () => {
    setCheckValue("all");
    setSearchResult([]);
    setSearchText("");
    history.push("/search");
  };

  const handleSelectedHero = (hero: Hero) => {
    setSelectedHero(hero);
    setModal(true);
  };

  const handleRemoveHero = (hero: Hero) => {
    setHeroes(heroes.filter((item) => item.id !== hero.id));
  };

  return (
    <div className="w-100 overflow-hidden">
      <div className="powerstats-sections min-vh-100">
        <div
          className="powerstats-info d-flex flex-column min-vh-100 justify-content-around align-items-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="2000"
        >
          <h1 className="title text-white fw-bolder text-uppercase">Super Heroes</h1>

          {heroes.length && (
            <div>
              <div className="powerstats row">
                {Object.keys(sortedArray).map((key) => (
                  <PowerStatCounter key={key} name={key} value={powerstats[key]} />
                ))}
              </div>
              <div className="averages w-100 d-flex flex-row justify-content-around">
                <div data-aos="fade-up">
                  <p className="fs-4 m-0 text-white">{averageWeight.toFixed(2)} Kg</p>
                  <p className="text-sm m-0 text-white">Average Weight</p>
                </div>
                <div data-aos="fade-up">
                  <p className="fs-4 m-0 text-white">{averageHeight.toFixed(2)} cm</p>
                  <p className="text-sm m-0 text-white">Average height</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="my-team-section h-100 min-vh-100 pb-5">
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

      {modal ? <HeroDetail hero={selectedHero} onClose={() => setModal(false)} /> : null}
    </div>
  );
};

export default HomeView;
