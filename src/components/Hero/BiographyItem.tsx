import React from "react";

interface BiographyItemProps {
  name: string;
  value: string | string[];
}

const BiographyItem: React.FC<BiographyItemProps> = ({ name, value }) => {
  return (
    <div className="p-0">
      <p className="text-start text-sm text-capitalize">
        <span className="fw-bold me-1">{name}:</span>
        {value.toString()}
      </p>
    </div>
  );
};

export default BiographyItem;
