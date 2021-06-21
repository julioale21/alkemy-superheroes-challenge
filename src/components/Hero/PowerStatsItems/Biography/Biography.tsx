import React from "react";
import Biography from "../../../../models/Biography";
import TextInfo from "../../../shared/TextInfo";

interface BiographyProps {
  bio: Biography;
}

const BiographyComponent: React.FC<BiographyProps> = ({ bio }) => {
  return (
    <div className="biography-section">
      <h6 className="text-center">Biography</h6>
      {Object.keys(bio).map((key) => (
        <TextInfo key={key} textSm textAlign="start" title={key} value={bio[key]} />
      ))}
    </div>
  );
};

export default BiographyComponent;
