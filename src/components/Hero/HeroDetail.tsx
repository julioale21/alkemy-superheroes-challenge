import React from "react";
import Hero from "../../models/Hero";

interface DetailProps {
  hero: Hero;
  onClose: () => void;
}
const HeroDetail: React.FC<DetailProps> = ({ hero, onClose }) => {
  return (
    <div className="d-flex position-fixed justify-content-center align-items-center top-0 w-100 h-100">
      <div className="card-detail bg-black d-flex flex-column flex-md-row justify-content-between">
        <div>
          <img alt={hero.name} className="img-detail" src={hero.image.url} />
        </div>
        <div className="d-flex flex-column align-items-center p-5 pt-3 pe-3 text-white">
          <div className="w-100">
            <button className="float-end" onClick={onClose}>
              X
            </button>
          </div>
          <h1 className="text-white">{hero.name}</h1>
          <p>
            <span className="text-danger fw-bolder me-3">Aliases: </span>
            {hero.biography.aliases.toString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
