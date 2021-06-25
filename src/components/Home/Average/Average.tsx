import React from "react";

interface Props {
  name: string;
  value: string;
}

const Average: React.FC<Props> = ({ name, value }) => {
  return (
    <div>
      <p className="fs-4 m-0 text-white">{value}</p>
      <p className="text-sm m-0 text-white">{name}</p>
    </div>
  );
};

export default Average;
