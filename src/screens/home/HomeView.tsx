import React from "react";
import "./index.css";
import { HeroContext } from "../../HeroContext";
import { useHistory } from "react-router-dom";
import AddHeroCard from "../../components/home/AddHeroCard";
import HeroCard from "../../components/Hero/HeroCard/HeroCard";
import CountUp from "react-countup";
import usePowerStats from "../../components/Hero/PowerStats/usePowerStats";

const HomeView: React.FC = () => {
  const { heroes } = React.useContext(HeroContext);
  const history = useHistory();

  const { powerstats, averageWeight, averageHeight, sortedArray } = usePowerStats(heroes);

  const handleAddClick = () => {
    history.push("/search");
  };

  return (
    <div className="bg-danger h-100 d-flex flex-column align-items-center">
      <div
        className="w-100 border d-flex flex-column align-items-center justify-content-around text-white"
        style={{ height: "400px" }}
      >
        <h2 className="text-uppercase fw-bold">Powerstats</h2>
        <div className="row w-100">
          {Object.keys(sortedArray).map((key) => (
            <div key={key} className="col-6 col-md-4">
              <h6>
                <span>{key.toUpperCase()}</span>
              </h6>
              <CountUp delay={0} end={powerstats[key]} start={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} className="fs-1" />
                  </div>
                )}
              </CountUp>
            </div>
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
