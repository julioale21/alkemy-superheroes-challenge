import React from "react";
import Hero from "../../../models/Hero";

interface ItemProps {
  item: Hero;
  onItemSelected: () => void;
}

const HeroListItem: React.FC<ItemProps> = ({ item, onItemSelected }) => {
  return (
    <div
      className="col-10 col-md-8 col-lg-6 my-1  p-2  mx-auto d-flex flex-row align-items-center shadow-lg"
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    >
      <div className="h-100">
        <img alt="Hero img" height="100%" src={item.image.url} width="100px" />
      </div>
      <div className="w-100 d-flex flex-column align-items-center justify-content-between px-3">
        <h6 className="text-warning">{item.name}</h6>
        <p className="text-white text-sm">Alisases: ({item.biography.aliases.toString()})</p>
        <button className="btn btn-warning btn-sm px-5" onClick={() => onItemSelected()}>
          <img alt="add" src="https://icongr.am/fontawesome/plus.svg?size=13&color=0b0a0a" />
          <span className="fw-bolder ms-2 text-uppercase">Add</span>
        </button>
      </div>
    </div>
  );
};

export default HeroListItem;
