import React from "react";

interface BtnProps {
  onButtonPressed: () => void;
  color?: string;
}
const CircularAddBtn: React.FC<BtnProps> = ({ onButtonPressed, color = "ffffff" }) => {
  return (
    <button className="buttonAdd bg-transparent border-0" onClick={onButtonPressed}>
      <img
        alt="add hero"
        src={`https://icongr.am/fontawesome/plus-circle.svg?size=128&color=${color.replace(
          "#",
          "",
        )}`}
        width="50px"
      />
    </button>
  );
};

export default CircularAddBtn;
