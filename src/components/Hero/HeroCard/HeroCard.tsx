import React from "react";
import Hero from "../../../models/Hero";

interface HeroCardProps {
  hero: Hero;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
  return (
    <div className="col-12 col-md-3 mt-5">
      <div className="card">
        <div className="mt-2">
          <img alt="hero" height="250px" src={hero.image.url} />
        </div>
        <h5 className="mt-2">{hero.name}</h5>
      </div>
    </div>
  );
};

export default HeroCard;
