import React from "react";
import "./index.css";
import { HeroContext } from "../../HeroContext";
import { useHistory } from "react-router-dom";
import AddHeroCard from "../../components/home/AddHeroCard";
import HeroCard from "../../components/Hero/HeroCard/HeroCard";
import CountUp from "react-countup";

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

  const averageWeight = React.useMemo(() => {
    const totalWeight = heroes.reduce((total, hero) => {
      return total + Number(hero.appearance.weight[1].replace(" kg", ""));
    }, 0);

    return Number(totalWeight) / heroes.length;
  }, [heroes]);

  const sortedArray = React.useMemo(() => {
    return Object.entries(powerstats)
      .sort(([, a], [, b]) => b - a)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  }, [powerstats]);

  const handleAddClick = () => {
    history.push("/search");
  };

  const averageHeight = React.useMemo(() => {
    const totalHeight = heroes.reduce((total, hero) => {
      let height =
        hero.appearance.height[1].includes("cm") &&
        Number(hero.appearance.height[1].replace(" cm", ""));

      height =
        hero.appearance.height[1].includes("meters") &&
        Number(hero.appearance.height[1].replace(" meters", "")) * 100;

      return total + Number(height);
    }, 0);

    return Number(totalHeight) / heroes.length;
  }, [heroes]);

  return (
    <div className="bg-danger h-100 d-flex flex-column align-items-center">
      <div
        className="w-100 border d-flex flex-column align-items-center justify-content-around text-white"
        style={{ height: "400px" }}
      >
        <h2 className="text-uppercase fw-bold">Powerstats</h2>
        <div className="row">
          {Object.keys(sortedArray).map((key) => (
            <div key={key} className="col-6 col-md-4">
              <h4>
                <span>{key.toUpperCase()}</span>
              </h4>
              {/* <p>{powerstats[key]}</p> */}
              <CountUp duration={1} end={powerstats[key]} start={0} />
            </div>
          ))}
        </div>
        <div className="averages w-100 d-flex flex-row justify-content-around">
          <div>
            <h3>Weight</h3>
            <p>{averageWeight.toFixed(2)} Kg</p>
          </div>
          <div>
            <h3>Height</h3>
            <p>{averageHeight.toFixed(2)} cm</p>
          </div>
        </div>
      </div>

      <div className="row w-100 d-flex justify-content-center mt-2 mb-5">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}

        {heroes.length < 6 && <AddHeroCard onAddClick={() => handleAddClick()} />}
      </div>
    </div>
  );
};

export default HomeView;
