import React from "react";

interface PowerStatProps {
  name: string;
  value: number | undefined;
}

const PowerStatItem: React.FC<PowerStatProps> = ({ name, value }) => {
  return (
    <div className="col-6 col-sm-4 p-0">
      <p className="font-weight-bold">{name}</p>
      <p className="powerstats-value">{value?.toString() !== "null" ? value : 0}</p>
    </div>
  );
};

export default PowerStatItem;
