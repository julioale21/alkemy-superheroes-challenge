import React from "react";
import { HeroContext } from "../../Context/HeroContext";
import { useHistory } from "react-router-dom";
import PowerStatCounter from "../../components/Hero/PowerStatsItems/PowerStatCounter";
import usePowerStats from "../../hooks/usePowerStats";
import AddHeroCard from "../../components/Hero/AddHeroCard";
import WelcomeCard from "../../components/Home/WelcomeCard";
import AverageList from "../../components/Home/AverageList";
import HeroDetail from "../../components/Hero/HeroDetail";
import HeroCard from "../../components/Hero/HeroCard";
import Hero from "../../models/Hero";
import "./index.css";

const Home: React.FC = () => {
  const {
    heros,
    selectedHero,
    addHeros,
    changeFilter,
    setSelectedHero,
    updateSearchResult,
    updateSearchValue,
  } = React.useContext(HeroContext);
  const [modal, setModal] = React.useState(false);
  const { powerstats, averageWeight, averageHeight, sortedPowerstats } = usePowerStats(heros);
  const history = useHistory();

  React.useEffect(() => {
    changeFilter("all");
    updateSearchResult([]);
    updateSearchValue("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const averages = [
    { name: "Average Weight", value: `${averageWeight.toFixed(2)} kg` },
    { name: "Average Height", value: `${averageHeight.toFixed(2)} cm` },
  ];

  const handleAddClick = () => {
    changeFilter("all");
    updateSearchResult([]);
    updateSearchValue("");
    history.push("/search");
  };

  const handleSelectedHero = (hero: Hero) => {
    setSelectedHero(hero);
    setModal(true);
  };

  const handleRemoveHero = (hero: Hero) => {
    addHeros(heros.filter((item) => item.id !== hero.id));
  };

  return (
    <div className="w-100 overflow-hidden">
      <div className="powerstats-sections min-vh-100">
        <div
          className="powerstats-info  d-flex flex-column min-vh-100 justify-content-around align-items-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="2000"
        >
          <h1 className="title text-white fw-bolder text-uppercase">Superheros</h1>

          {heros.length ? (
            <div>
              <h3 className="text-white mb-4 fw-bolder">Team Powerstats</h3>
              <div className="powerstats row">
                {Object.keys(sortedPowerstats).map((key) => (
                  <PowerStatCounter key={key} name={key} value={powerstats[key]} />
                ))}
              </div>
              <AverageList averages={averages} />
            </div>
          ) : (
            <WelcomeCard />
          )}
        </div>
      </div>

      <div className="my-team-section h-100 min-vh-100 pb-5" id="team-section">
        {heros.length === 0 && <p className="text-white pt-5 fs-5">Add a new Hero to start</p>}
        <div className="row w-100 mx-auto d-flex justify-content-center ">
          {heros.map((hero) => (
            <HeroCard
              key={hero.id}
              hero={hero}
              onHeroSelected={() => handleSelectedHero(hero)}
              onRemoveSelected={() => handleRemoveHero(hero)}
            />
          ))}

          {heros.length < 6 && <AddHeroCard onAddClick={handleAddClick} />}
        </div>
      </div>

      {modal ? <HeroDetail hero={selectedHero} onClose={() => setModal(false)} /> : null}
    </div>
  );
};

export default Home;
