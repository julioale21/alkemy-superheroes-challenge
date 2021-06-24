import React from "react";
import { useHistory } from "react-router-dom";
import { HeroContext } from "../../Context/HeroContext";
import { useToasts } from "react-toast-notifications";
import Hero from "../../models/Hero";

const useHeroDetail = () => {
  const { selectedHero, setSelectedHero, heros, addHeros } = React.useContext(HeroContext);
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

  const handleCancel = () => {
    setSelectedHero({} as Hero);
    history.push("/search");
  };

  return { selectedHero, exists, addNewHero, handleCancel };
};

export default useHeroDetail;
