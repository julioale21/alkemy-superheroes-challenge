import React from "react";

interface AppearanceItemProps {
  name: string;
  value: string | string[];
}

const AppearanceItem: React.FC<AppearanceItemProps> = ({ name, value }) => {
  return (
    <div className="col-6 col-sm-4">
      <p className="text-sm mb-0">
        <span className="fw-bold me-1">{name}:</span>
        {value.length ? value[1] : value}
      </p>
    </div>
  );
};

export default AppearanceItem;
