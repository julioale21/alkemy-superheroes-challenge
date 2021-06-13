import React from "react";
import "./index.css";

interface BiographyItemProps {
  name: string;
  value: string | string[];
}

const BiographyItem: React.FC<BiographyItemProps> = ({ name, value }) => {
  return (
    <div className="biography-item">
      <p className="text-start">
        <span>{name}:</span>
        {value}
      </p>
    </div>
  );
};

export default BiographyItem;
