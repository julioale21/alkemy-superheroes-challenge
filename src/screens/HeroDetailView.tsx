import React from "react";
import { useHistory } from "react-router-dom";
import Appearance from "../components/Hero/Appearance";
import Biography from "../components/Hero/Biography";
import Connections from "../components/Hero/Connections";

import PowerStats from "../components/Hero/PowerStats";
import Work from "../components/Hero/Work";
import { HeroContext } from "../HeroContext";
import Hero from "../models/Hero";

const HeroDetailView: React.FC = () => {
  const { selectedHero, heroes, setHeroes } = React.useContext(HeroContext);
  const history = useHistory();

  const exists = (hero: Hero): Boolean => {
    return heroes.findIndex((item) => item.id === hero.id) !== -1;
  };

  const addHero = () => {
    if (heroes.length >= 6) {
      // eslint-disable-next-line no-console
      console.log("To many heroes");

      return;
    }

    const alignments = heroes.filter(
      (hero) => hero.biography.alignment === selectedHero.biography.alignment,
    );

    if (alignments.length >= 3) {
      // eslint-disable-next-line no-console
      console.log("Alignment limit reached");

      return;
    }

    if (!exists(selectedHero)) {
      setHeroes([...heroes, selectedHero]);
      history.push("/home");
    }
  };

  return (
    <div className="w-100 h-100 mh-100 d-flex justify-content-center align-items-center">
      {selectedHero ? (
        <div className="w-100 h-100 d-flex flex-column flex-md-row align-items-center justify-content-md-center gap-4 p-3">
          <div className="m-0 fw-bolder">
            <img className="img" src={selectedHero.image.url} style={{ width: "400px" }} />
            <PowerStats powerstats={selectedHero.powerstats} />
          </div>
          <div className="md-w-40 p-md-0">
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
              <button
                className="w-90 border-0 text-white rounded bg-blue mt-5 mx-auto py-2 opacity-50"
                onClick={() => addHero()}
              >
                Add to my team
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <p>There are not hero selected</p>
      )}
    </div>
  );
};

export default HeroDetailView;
