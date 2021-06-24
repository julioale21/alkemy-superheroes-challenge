import React from "react";
import Hero from "../../../models/Hero";
import HeroListItem from "../HeroListItem";

interface ListProps {
  heros?: Hero[] | null;
  onHeroSelected: (hero: Hero) => void;
}
const HeroList: React.FC<ListProps> = ({ heros, onHeroSelected }) => {
  return (
    <div className="list-group mt-5">
      {heros?.map((hero) => (
        <HeroListItem key={hero.id} item={hero} onItemSelected={() => onHeroSelected(hero)} />
      ))}
    </div>
  );
};

export default HeroList;
