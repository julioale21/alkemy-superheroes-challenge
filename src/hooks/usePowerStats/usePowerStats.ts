import { useMemo } from "react";
import Powerstats from "../../interfaces/PowerStatsInterface";
import Hero from "../../models/Hero";

const usePowerStats = (heros: Hero[]) => {
  //const { heroes } = useContext(HeroContext);

  const powerstats: Powerstats = useMemo(() => {
    const totalCombat = heros.reduce((total, hero) => {
      return total + Number(hero.powerstats.combat);
    }, 0);

    const totalDurability = heros.reduce((total, hero) => {
      return total + Number(hero.powerstats.durability);
    }, 0);

    const totalIntelligence = heros.reduce((total, hero) => {
      return total + Number(hero.powerstats.intelligence);
    }, 0);

    const totalPower = heros.reduce((total, hero) => {
      return total + Number(hero.powerstats.power);
    }, 0);

    const totalSpeed = heros.reduce((total, hero) => {
      return total + Number(hero.powerstats.speed);
    }, 0);

    const totalStrength = heros.reduce((total, hero) => {
      return total + Number(hero.powerstats.strength);
    }, 0);

    const result: Powerstats = {
      combat: totalCombat,
      durability: totalDurability,
      intelligence: totalIntelligence,
      power: totalPower,
      speed: totalSpeed,
      strength: totalStrength,
    };

    return result;
  }, [heros]);

  const sortedArray = useMemo(() => {
    return Object.entries(powerstats)
      .sort(([, a], [, b]) => b - a)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  }, [powerstats]);

  const averageWeight = useMemo(() => {
    const totalWeight = heros.reduce((total, hero) => {
      return total + Number(hero.appearance.weight[1].replace(" kg", ""));
    }, 0);

    return Number(totalWeight) / heros.length;
  }, [heros]);

  const averageHeight = useMemo(() => {
    const totalHeight = heros.reduce((total, hero) => {
      let height = hero.appearance.height[1].replace(" cm", "");

      height = height.replace(" meters", "");

      const heightValue: number = hero.appearance.height[1].includes("cm")
        ? Number(height)
        : Number(height) * 100;

      return total + heightValue;
    }, 0);

    return Number(totalHeight) / heros.length;
  }, [heros]);

  return { powerstats, sortedArray, averageWeight, averageHeight };
};

export default usePowerStats;
