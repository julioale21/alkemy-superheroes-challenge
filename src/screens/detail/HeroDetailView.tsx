import React from "react";
import { useHistory } from "react-router-dom";
import Appearance from "../../components/Hero/Appearance";
import Biography from "../../components/Hero/Biography";
import Connections from "../../components/Hero/Connections";

import PowerStats from "../../components/Hero/PowerStats";
import Work from "../../components/Hero/Work";
import { HeroContext } from "../../HeroContext";
import "./index.css";

const HeroDetailView: React.FC = () => {
  const { selectedHero, heroes, setHeroes } = React.useContext(HeroContext);
  const history = useHistory();

  const addHero = () => {
    if (!heroes.includes(selectedHero)) {
      setHeroes([...heroes, selectedHero]);
      history.push("/home");
    }
  };

  return (
    <div className="main-content">
      {selectedHero ? (
        <div className="hero-detail">
          <div className="hero-short-info">
            <img className="img" src={selectedHero.image.url} />
            <PowerStats powerstats={selectedHero.powerstats} />
          </div>
          <div className="hero-full-info">
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
            <button className="btnAdd" onClick={() => addHero()}>
              Add to my team
            </button>
          </div>
        </div>
      ) : (
        <p>There are not hero selected</p>
      )}
    </div>
  );
};

export default HeroDetailView;
