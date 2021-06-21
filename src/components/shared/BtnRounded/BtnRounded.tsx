import React from "react";

interface BtnProps {
  onBtnClick: React.MouseEventHandler<HTMLButtonElement>;
  type?: "primary" | "secondary" | "success" | "danger" | "warning";
}
const BtnRounded: React.FC<BtnProps> = ({ onBtnClick, type = "primary", children }) => {
  return (
    <button
      className={`border-0 text-white px-4 rounded bg-${type} my-5  mx-2 py-2`}
      onClick={onBtnClick}
    >
      {children}
    </button>
  );
};

export default BtnRounded;
