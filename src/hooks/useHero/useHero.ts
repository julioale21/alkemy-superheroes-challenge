import React from "react";
import { useHistory } from "react-router-dom";
import { HeroContext } from "../../Context/HeroContext";
import { useToasts } from "react-toast-notifications";
import Hero from "../../models/Hero";

const useHero = () => {
  const { selectedHero, heros, addHeros, setSelectedHero } = React.useContext(HeroContext);
  const history = useHistory();
  const { addToast } = useToasts();

  const exists = (hero: Hero): Boolean => {
    return heros.findIndex((item) => item.id === hero.id) !== -1;
  };

  const addNewHero = () => {
    if (heros.length >= 6) {
      addToast("Your team is complete!", { appearance: "error" });

      return;
    }

    const alignments = heros.filter(
      (hero) => hero.biography.alignment === selectedHero.biography.alignment,
    );

    if (alignments.length >= 3) {
      addToast(`You have reached the limit of ${selectedHero.biography.alignment} alignments`, {
        appearance: "error",
      });

      return;
    }

    if (!exists(selectedHero)) {
      addHeros([...heros, selectedHero]);
      addToast(`${selectedHero.name} is now member of your Team!`, { appearance: "success" });
      history.push("/home");
    }
  };

  const removeSelectedHero = () => {
    setSelectedHero({} as Hero);
  };

  const removeHero = (hero: Hero) => {
    addHeros(heros.filter((item) => item.id !== hero.id));
  };

  const addSelectedHero = (hero: Hero) => {
    setSelectedHero(hero);
  };

  return { exists, addNewHero, removeSelectedHero, removeHero, addSelectedHero };
};

export default useHero;
