import React from "react";
import Hero from "../../models/Hero";

interface HeroCardProps {
  hero: Hero;
  onHeroSelected: () => void;
  onRemoveSelected: () => void;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero, onHeroSelected, onRemoveSelected }) => {
  return (
    <div className="col-10 col-sm-6 col-md-3 col-xl-2 p-1 mt-5" data-aos="fade-up">
      <div
        className="h-100 d-flex flex-column justify-content-between"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      >
        <div className="mt-2 p-2">
          <img alt="hero" className="rounded-2" src={hero.image.url} width="100%" />
        </div>

        <div>
          <h4 className="mt-2 text-white pb-2">{hero.name}</h4>

          <div className="row px-2">
            {Object.keys(hero.powerstats).map((key) => (
              <div key={key} className="col-6">
                <p className="text-xs fw-bold text-capitalize text-white shadow-black m-0 p-0">
                  {key}
                </p>
                <p className="text-sm text-warning fw-bolder">{hero.powerstats[key]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="d-grid gap-1 col-11 mx-auto pb-3">
          <button
            className="btn bg-secondary btn-sm text-white"
            type="button"
            onClick={onHeroSelected}
          >
            View Detail
          </button>
          <button className="btn btn-danger btn-sm" type="button" onClick={onRemoveSelected}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
