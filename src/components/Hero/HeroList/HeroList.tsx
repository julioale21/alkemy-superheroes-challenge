import React from "react";
import Hero from "../../../models/Hero";
import HeroListItem from "../HeroListItem";

interface ListProps {
  heroes?: Hero[] | null;
  onHeroSelected: (hero: Hero) => void;
}
const HeroList: React.FC<ListProps> = ({ heroes, onHeroSelected }) => {
  return (
    <div className="list-group mt-5">
      {heroes?.map((hero) => (
        <HeroListItem key={hero.id} item={hero} onItemSelected={() => onHeroSelected(hero)} />
      ))}
    </div>
  );
};

export default HeroList;
