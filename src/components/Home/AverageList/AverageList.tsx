import React from "react";
import Average from "../Average";
interface Average {
  name: string;
  value: string;
}

interface Props {
  averages: Average[];
}
const AverageList: React.FC<Props> = ({ averages }) => {
  return (
    <div className="averages w-100 d-flex flex-row justify-content-around" data-aos="fade-up">
      {averages.map((average) => (
        <Average key={average.name} name={average.name} value={average.value} />
      ))}
    </div>
  );
};

export default AverageList;
