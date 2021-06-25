import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { HeroContext } from "../../Context/HeroContext";
import Connections from "../../components/Hero/PowerStatsItems/Connections";
import Appearance from "../../components/Hero/PowerStatsItems/Appearance";
import PowerStats from "../../components/Hero/PowerStatsItems/Powerstats";
import BtnRounded from "../../components/shared/BtnRounded";
import Biography from "../../components/Hero/PowerStatsItems/Biography";
import useHero from "../../hooks/useHero";
import Work from "../../components/Hero/PowerStatsItems/Work";
import "./index.css";

const Detail: React.FC = () => {
  const { selectedHero } = React.useContext(HeroContext);
  const { exists, addNewHero, removeSelectedHero } = useHero();
  const history = useHistory();

  const handleCancelSelected = () => {
    removeSelectedHero();
    history.push("/search");
  };

  return (
    <div className="detail-section min-vh-100 d-flex justify-content-center align-items-center">
      {Object.entries(selectedHero).length > 0 ? (
        <div className="row d-flex justify-content-center align-items-center py-5 mt-5">
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
                <BtnRounded type="warning" onBtnClick={addNewHero}>
                  Ok
                </BtnRounded>

                <BtnRounded type="danger" onBtnClick={handleCancelSelected}>
                  Cancel
                </BtnRounded>
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

export default Detail;
