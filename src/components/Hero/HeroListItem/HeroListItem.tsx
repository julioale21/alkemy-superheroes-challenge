import React from "react";
import Hero from "../../../models/Hero";

interface ItemProps {
  item: Hero;
  onItemSelected: () => void;
}

const HeroListItem: React.FC<ItemProps> = ({ item, onItemSelected }) => {
  return (
    <div
      className="col-10 col-md-8 col-lg-6 my-1 border p-2  mx-auto cursor-pointer d-flex flex-row"
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      onClick={() => onItemSelected()}
    >
      <div className="h-100">
        <img alt="Hero img" height="100%" src={item.image.url} width="100px" />
      </div>
      <div className="w-100 d-flex flex-column align-items-center justify-content-between">
        <h3 className="text-warning">{item.name}</h3>
        <button className="btn btn-warning btn-sm">+ Add</button>
      </div>
    </div>
  );
};

export default HeroListItem;
