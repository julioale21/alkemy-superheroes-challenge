import React from "react";
import Hero from "../../../models/Hero";
import CloseBtnCircular from "../../shared/CircularCloseBtn";
import TextInfo from "../../shared/TextInfo";
import "./index.css";

interface DetailProps {
  hero: Hero;
  onClose: () => void;
}
const HeroDetail: React.FC<DetailProps> = ({ hero, onClose }) => {
  return (
    <div className="d-flex position-fixed justify-content-center align-items-center top-0 w-100 h-100">
      <div className="card-detail d-flex flex-column">
        <div className="w-100">
          <CloseBtnCircular onButtonPressed={onClose} />
        </div>
        <div className="d-flex justify-content-center align-items-center mx-2">
          <img alt={hero.name} src={hero.image.url} style={{ maxHeight: "350px" }} />
        </div>
        <div className="container d-flex flex-column align-items-center p-5 pt-3 pe-3 text-white">
          <h1 className="text-white">{hero.name}</h1>
          <TextInfo title="Aliases" value={hero.biography.aliases.toString()} />
          <div className="w-75 d-flex justify-content-between gap-2">
            <TextInfo textAlign="start" title="Weight" value={hero.appearance.weight[1]} />
            <TextInfo textAlign="start" title="Height" value={hero.appearance.height[1]} />
          </div>
          <div className="w-75 d-flex justify-content-between gap-2">
            <TextInfo textAlign="start" title="Eyes Color" value={hero.appearance["eye-color"]} />
            <TextInfo textAlign="start" title="Hair Color" value={hero.appearance["hair-color"]} />
          </div>
          <div className="w-75 d-flex justify-content-start">
            <TextInfo title="Place of work" value={hero.work.base} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
