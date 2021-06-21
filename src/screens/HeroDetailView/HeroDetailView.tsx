import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

import Appearance from "../../components/Hero/PowerStatsItems/Appearance";
import Biography from "../../components/Hero/PowerStatsItems/Biography";
import Connections from "../../components/Hero/PowerStatsItems/Connections";
import PowerStats from "../../components/Hero/PowerStatsItems/Powerstats";
import bgImage from "../../assets/bg-12.jpg";
import Work from "../../components/Hero/PowerStatsItems/Work";
import { HeroContext } from "../../Context/HeroContext";
import Hero from "../../models/Hero";
import "./index.css";

const HeroDetailView: React.FC = () => {
  const { selectedHero, heroes, setHeroes, setCheckValue, setSearchResult, setSearchText } =
    React.useContext(HeroContext);
  const history = useHistory();
  const { addToast } = useToasts();

  const exists = (hero: Hero): Boolean => {
    return heroes.findIndex((item) => item.id === hero.id) !== -1;
  };

  const addHero = () => {
    if (heroes.length >= 6) {
      addToast("Your team is complete!", { appearance: "error" });

      return;
    }

    const alignments = heroes.filter(
      (hero) => hero.biography.alignment === selectedHero.biography.alignment,
    );

    if (alignments.length >= 3) {
      addToast(`You have reached the limit of ${selectedHero.biography.alignment} alignments`, {
        appearance: "error",
      });

      return;
    }

    if (!exists(selectedHero)) {
      setHeroes([...heroes, selectedHero]);
      setCheckValue("all");
      setSearchResult([]);
      setSearchText("");
      history.push("/home");
    }
  };

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {Object.entries(selectedHero).length > 0 ? (
        <div className="row d-flex justify-content-center align-items-center py-5">
          <div className="hero-short-info col-11 col-sm-8 col-md-6 col-lg-3 col-xl-4 m-0 h-100 fw-bolder p-3 mx-3 text-white">
            <img src={selectedHero.image.url} style={{ width: "100%" }} />
            <PowerStats counterSize={3} powerstats={selectedHero.powerstats} />
          </div>
          <div className="hero-full-info col-11 col-lg-6 p-3 mt-4 mt-lg-0 text-white">
            <h1>{selectedHero.name}</h1>
            <h6>({selectedHero.biography.aliases.toString()})</h6>
            <hr />
            <Biography bio={selectedHero.biography} />
            <hr />
            <Appearance appearance={selectedHero.appearance} />
            <hr />
            <Work work={selectedHero.work} />
            <hr />
            <Connections connections={selectedHero.connections} />
            {!exists(selectedHero) ? (
              <div>
                <button
                  className="border-0 text-white px-4 rounded bg-warning my-5  mx-2 py-2 opacity-50"
                  onClick={addHero}
                >
                  Ok
                </button>
                <button
                  className="border-0 text-white px-3 rounded bg-danger my-5 mx-auto py-2 opacity-50"
                  onClick={addHero}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <p className="fs-6 mt-2 text-danger">Hero is already in your team!</p>
            )}
          </div>
        </div>
      ) : (
        <Redirect to="/home" />
      )}
    </div>
  );
};

export default HeroDetailView;
