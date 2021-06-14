import React from "react";
import "./index.css";
import { HeroContext } from "../../HeroContext";
import { useHistory } from "react-router-dom";
import AddHeroCard from "../../components/home/AddHeroCard";

interface Powerstats {
  [key: string]: number;
  durability: number;
  combat: number;
  intelligence: number;
  power: number;
  speed: number;
  strength: number;
}

const HomeView: React.FC = () => {
  const { heroes } = React.useContext(HeroContext);
  const history = useHistory();

  const powerstats = React.useMemo(() => {
    const totalCombat = heroes.reduce((total, hero) => {
      return total + Number(hero.powerstats.combat);
    }, 0);

    const totalDurability = heroes.reduce((total, hero) => {
      return total + Number(hero.powerstats.durability);
    }, 0);

    const totalIntelligence = heroes.reduce((total, hero) => {
      return total + Number(hero.powerstats.intelligence);
    }, 0);

    const totalPower = heroes.reduce((total, hero) => {
      return total + Number(hero.powerstats.power);
    }, 0);

    const totalSpeed = heroes.reduce((total, hero) => {
      return total + Number(hero.powerstats.speed);
    }, 0);

    const totalStrength = heroes.reduce((total, hero) => {
      return total + Number(hero.powerstats.strength);
    }, 0);

    const result: Powerstats = {
      combat: totalCombat,
      durability: totalDurability,
      intelligence: totalIntelligence,
      power: totalPower,
      speed: totalSpeed,
      strength: totalStrength,
    };

    return result;
  }, [heroes]);

  const sortedArray = React.useMemo(() => {
    return Object.entries(powerstats)
      .sort(([, a], [, b]) => b - a)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  }, [powerstats]);

  const handleAddClick = () => {
    history.push("/search");
  };

  return (
    <div className="h-100 d-flex flex-column align-items-center ">
      <div
        className="w-100 border d-flex flex-column align-items-center justify-content-around"
        style={{ height: "400px" }}
      >
        <h1>My team</h1>

        <div className="row">
          {Object.keys(sortedArray).map((key) => (
            <div key={key} className="col-6 col-md-4">
              <h4>
                <span>{key.toUpperCase()}</span>
              </h4>
              <p>{powerstats[key]}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="row w-100 d-flex justify-content-center mt-2 mb-5">
        {heroes.map((hero) => (
          <div key={hero.id} className="col-12 col-md-3 mt-5">
            <div className="card">
              <div className="mt-2">
                <img alt="hero" height="250px" src={hero.image.url} />
              </div>
              <h5 className="mt-2">{hero.name}</h5>
            </div>
          </div>
        ))}

        {heroes.length < 6 && <AddHeroCard onAddClick={() => handleAddClick()} />}
      </div>
    </div>
  );
};

export default HomeView;
