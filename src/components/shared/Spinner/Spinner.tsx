import React from "react";
import { Colors } from "../../../types/Colors";

interface Props {
  width?: string;
  height?: string;
  color?: Colors;
  justify?: "center" | "start" | "end";
}
const Spinner: React.FC<Props> = ({
  width = "3rem",
  height = "3rem",
  color = "primary",
  justify = "center",
}) => {
  return (
    <div className={`d-flex justify-content-${justify}`}>
      <div className={`spinner-border text-${color}`} role="status" style={{ width, height }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
