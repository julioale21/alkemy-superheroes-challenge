import React from "react";

interface PowerStatProps {
  name: string;
  value: number | undefined;
}

const PowerStatItem: React.FC<PowerStatProps> = ({ name, value }) => {
  return (
    <div className="col-6 col-sm-4 p-0">
      <p className="fw-bold fs-6 mb-0">{name}</p>
      <p className="fw-bold text-red shadow-black fs-1 mt-0">
        {value?.toString() !== "null" ? value : 0}
      </p>
    </div>
  );
};

export default PowerStatItem;
