import React from "react";
import { CountUp } from "use-count-up";
import "./index.css";

interface PowerProps {
  name: string;
  value: number;
  counterSize?: 1 | 2 | 3 | 4 | 5 | 6;
}

const PowerStatCounter: React.FC<PowerProps> = ({ name, value, counterSize = 1 }) => {
  return (
    <div className="col-4 mb-3 d-flex flex-column">
      <p className={`counter fs-${counterSize} fw-bolder`}>
        <CountUp isCounting duration={3.2} end={value} start={0} />
      </p>
      <h6 className="text-sm text-cente text-white">
        {`Total`}
        <span className="text-capitalize text-white fw-bolder"> {name} </span>
      </h6>
    </div>
  );
};

export default PowerStatCounter;
