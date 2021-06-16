import React from "react";
import CountUp from "react-countup";

interface PowerProps {
  name: string;
  value: number;
}

const PowerStatCounter: React.FC<PowerProps> = ({ name, value }) => {
  return (
    <div className="col-6 col-md-4 mb-3">
      <h6>
        <span>{name.toUpperCase()}</span>
      </h6>
      <div className="border border-3 w-circle mb-3 mx-auto p-2 rounded-circle">
        <CountUp delay={0} end={value} start={0}>
          {({ countUpRef }) => (
            <div>
              <span
                ref={countUpRef}
                className="fs-1 text-red fw-bolder"
                style={{ textShadow: "3px 3px 2px white" }}
              />
            </div>
          )}
        </CountUp>
      </div>
    </div>
  );
};

export default PowerStatCounter;
