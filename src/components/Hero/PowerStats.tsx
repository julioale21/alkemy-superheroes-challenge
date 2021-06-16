import React from "react";
import Powerstats from "../../models/Popwerstats";
import PowerStatItem from "./PowerStatItem";

interface PowerStatListProps {
  powerstats: Powerstats;
}

const PowerStats: React.FC<PowerStatListProps> = ({ powerstats }) => {
  return (
    <div>
      <h4>Powerstats</h4>
      <div className="row">
        {Object.keys(powerstats).map((key) => {
          return <PowerStatItem key={key} name={key} value={powerstats[key]} />;
        })}
      </div>
    </div>
  );
};

export default PowerStats;
