import React from "react";
import "./index.css";

interface AppearanceItemProps {
  name: string;
  value: string | string[];
}

const AppearanceItem: React.FC<AppearanceItemProps> = ({ name, value }) => {
  return (
    <div className="appearance-item col-6 col-sm-4">
      <p>
        <span>{name}:</span>
        {value.length ? value[1] : value}
      </p>
    </div>
  );
};

export default AppearanceItem;
