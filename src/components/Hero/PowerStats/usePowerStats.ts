import { useMemo } from "react";
import Powerstats from "./PowerStatsInterface";
import Hero from "../../../models/Hero";

const usePowerStats = (heroes: Hero[]) => {
  //const { heroes } = useContext(HeroContext);

  const powerstats: Powerstats = useMemo(() => {
    const totalCombat = heroes.reduce((total, hero) => {
      return total + Number(hero.powerstats.combat);
    }, 0);

    const totalDurability = heroes.reduce((total, hero) => {
      return total + Number(hero.powerstats.durability);
    }, 0);

    const totalIntelligence = heroes.reduce((total, hero) => {
      return total + Number(hero.powerstats.intelligence);
    }, 0);

    const totalPower = heroes.reduce((total, hero) => {
      return total + Number(hero.powerstats.power);
    }, 0);

    const totalSpeed = heroes.reduce((total, hero) => {
      return total + Number(hero.powerstats.speed);
    }, 0);

    const totalStrength = heroes.reduce((total, hero) => {
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
  }, [heroes]);

  const sortedArray = useMemo(() => {
    return Object.entries(powerstats)
      .sort(([, a], [, b]) => b - a)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  }, [powerstats]);

  const averageWeight = useMemo(() => {
    const totalWeight = heroes.reduce((total, hero) => {
      return total + Number(hero.appearance.weight[1].replace(" kg", ""));
    }, 0);

    return Number(totalWeight) / heroes.length;
  }, [heroes]);

  const averageHeight = useMemo(() => {
    const totalHeight = heroes.reduce((total, hero) => {
      let height = hero.appearance.height[1].replace(" cm", "");

      height = height.replace(" meters", "");

      const heightValue: number = hero.appearance.height[1].includes("cm")
        ? Number(height)
        : Number(height) * 100;

      return total + heightValue;
    }, 0);

    return Number(totalHeight) / heroes.length;
  }, [heroes]);

  return { powerstats, sortedArray, averageWeight, averageHeight };
};

export default usePowerStats;
