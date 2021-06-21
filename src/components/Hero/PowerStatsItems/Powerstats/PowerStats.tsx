import React from "react";
import Powerstats from "../../../../models/Popwerstats";
import PowerStatCounter from "../PowerStatCounter";
interface PowerStatListProps {
  powerstats: Powerstats;
}

const PowerStats: React.FC<PowerStatListProps> = ({ powerstats }) => {
  return (
    <div>
      <h4>Powerstats</h4>
      <div className="row">
        {Object.keys(powerstats).map((key) => {
          return <PowerStatCounter key={key} counterSize={6} name={key} value={powerstats[key]} />;
        })}
      </div>
    </div>
  );
};

export default PowerStats;
