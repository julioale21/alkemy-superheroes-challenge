import React from "react";
import Hero from "../../../models/Hero";
import "./index.css";

interface ItemProps {
  item: Hero;
  onItemSelected: () => void;
}

const HeroItemResult: React.FC<ItemProps> = ({ item, onItemSelected }) => {
  return (
    <div
      className="card cursor-pointer list-group-item d-flex flex-row"
      onClick={() => onItemSelected()}
    >
      <div className="h-100">
        <img alt="Hero img" height="100%" src={item.image.url} width="100px" />
      </div>
      <div className="w-75 d-flex flex-row justify-content-center align-items-center">
        <p>{item.name}</p>
      </div>
    </div>
  );
};

export default HeroItemResult;
