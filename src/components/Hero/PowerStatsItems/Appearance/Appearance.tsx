import React from "react";
import Appearance from "../../../../models/Appearance";
import TextInfo from "../../../shared/TextInfo";

interface AppearanceProps {
  appearance: Appearance;
}
const AppearanceComponent: React.FC<AppearanceProps> = ({ appearance }) => {
  return (
    <div className="appearance-section">
      <h6>Appearance</h6>
      <div className="row">
        {Object.keys(appearance).map((key) => (
          <div key={key} className="col-6 col-sm-4">
            <TextInfo
              textSm
              title={key}
              value={Array.isArray(appearance[key]) ? appearance[key][1] : appearance[key]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppearanceComponent;
