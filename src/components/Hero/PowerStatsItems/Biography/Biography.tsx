import React from "react";
import Biography from "../../../../models/Biography";
import BiographyItem from "../BiographyItem";

interface BiographyProps {
  bio: Biography;
}

const BiographyComponent: React.FC<BiographyProps> = ({ bio }) => {
  return (
    <div className="biography-section">
      <h6 className="text-center">Biography</h6>
      {Object.keys(bio).map((key) => (
        <BiographyItem key={key} name={key} value={bio[key]} />
      ))}
    </div>
  );
};

export default BiographyComponent;
