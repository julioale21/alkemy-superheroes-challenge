import React from "react";
import CountUp from "react-countup";

interface PowerProps {
  name: string;
  value: number;
}

const PowerStatCounter: React.FC<PowerProps> = ({ name, value }) => {
  return (
    <div className="col-6 col-md-4 mb-3">
      <CountUp delay={0} end={value} start={0}>
        {({ countUpRef }) => (
          <div>
            <span
              ref={countUpRef}
              className="fs-1 text-warning fw-bolder"
              style={{ textShadow: "3px 3px 2px red" }}
            />
          </div>
        )}
      </CountUp>
      <h6 style={{ textShadow: "1px 1px 1px yellow" }}>
        <span className="text-capitalize text-danger fs-5">{name}</span>
      </h6>
    </div>
  );
};

export default PowerStatCounter;
