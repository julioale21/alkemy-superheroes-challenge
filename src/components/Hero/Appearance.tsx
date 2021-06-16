import React from "react";
import Appearance from "../../models/Appearance";
import AppearanceItem from "./AppearanceItem";

interface AppearanceProps {
  appearance: Appearance;
}
const AppearanceComponent: React.FC<AppearanceProps> = ({ appearance }) => {
  return (
    <div className="appearance-section">
      <h6>Appearance</h6>
      <div className="row">
        {Object.keys(appearance).map((key) => (
          <AppearanceItem key={key} name={key} value={appearance[key]} />
        ))}
      </div>
    </div>
  );
};

export default AppearanceComponent;
