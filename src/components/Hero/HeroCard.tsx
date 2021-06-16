import React from "react";
import Hero from "../../models/Hero";

interface HeroCardProps {
  hero: Hero;
  onHeroSelected: () => void;
  onRemoveSelected: () => void;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero, onHeroSelected, onRemoveSelected }) => {
  return (
    <div className="col-12 col-sm-6 col-md-3 col-xl-2 mt-5" data-aos="fade-up">
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
        <div className="mt-2 p-1">
          <img alt="hero" src={hero.image.url} width="100%" />
        </div>

        <h4 className="mt-2 text-white pb-2">{hero.name}</h4>
        <p className="text-white text-sm">Alignment: {hero.biography.alignment}</p>

        <div className="d-grid gap-1 col-11 mx-auto pb-3">
          <button className="btn btn-primary btn-sm" type="button" onClick={() => onHeroSelected()}>
            View Detail
          </button>
          <button
            className="btn btn-danger btn-sm"
            type="button"
            onClick={() => onRemoveSelected()}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
