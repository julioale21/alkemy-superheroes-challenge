import React from "react";
import Powerstats from "../../../../models/Popwerstats";
import PowerStatCounter from "../PowerStatCounter";
interface PowerStatListProps {
  powerstats: Powerstats;
  counterSize?: 1 | 2 | 3 | 4 | 5 | 6;
}

const PowerStats: React.FC<PowerStatListProps> = ({ powerstats, counterSize = 6 }) => {
  return (
    <div>
      <h4 className="text-warning">Powerstats</h4>
      <div className="row">
        {Object.keys(powerstats).map((key) => {
          return (
            <PowerStatCounter
              key={key}
              counterSize={counterSize}
              name={key}
              value={powerstats[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PowerStats;
