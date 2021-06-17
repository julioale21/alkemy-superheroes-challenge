import React from "react";
import Hero from "../../models/Hero";

interface DetailProps {
  hero: Hero;
  onClose: () => void;
}
const HeroDetail: React.FC<DetailProps> = ({ hero, onClose }) => {
  return (
    <div className="d-flex position-fixed justify-content-center align-items-center top-0 w-100 h-100">
      <div className="card-detail bg-black d-flex flex-column">
        <div className="w-100">
          <button
            className="float-end bg-transparent rounded-circle border border-1 border-danger po-1 m-4"
            onClick={onClose}
          >
            <span className="text-danger">X</span>
          </button>
        </div>
        <div className="d-flex justify-content-center align-items-center mx-2">
          <img alt={hero.name} className="img-detail" src={hero.image.url} />
        </div>
        <div className="d-flex flex-column align-items-center p-5 pt-3 pe-3 text-white">
          <h1 className="text-white">{hero.name}</h1>
          <p>
            <span className="text-danger fw-bolder me-3">Aliases: </span>
            {hero.biography.aliases.toString()}
          </p>
          <p>
            <span className="text-danger fw-bolder me-3">Weight:</span>
            {hero.appearance.weight[1]}
          </p>
          <p>
            <span className="text-danger fw-bolder me-3">Height:</span>
            {hero.appearance.height[1]}
          </p>
          <p>
            <span className="text-danger fw-bolder me-3">Eyes Color:</span>
            {hero.appearance["eye-color"]}
          </p>
          <p>
            <span className="text-danger fw-bolder me-3">Hair Color:</span>
            {hero.appearance["hair-color"]}
          </p>
          <p>
            <span className="text-danger fw-bolder me-3">Place of work:</span>
            {hero.work.base}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
