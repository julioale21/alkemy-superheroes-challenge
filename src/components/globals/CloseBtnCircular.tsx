import React from "react";

interface ButtonProps {
  onButtonPressed: () => void;
}

const CloseBtnCircular: React.FC<ButtonProps> = ({ onButtonPressed }) => {
  return (
    <button
      className="float-end bg-transparent rounded-circle border border-4 border-danger po-1 m-4"
      onClick={onButtonPressed}
    >
      <img
        alt="close"
        src="https://icongr.am/fontawesome/close.svg?size=128&color=f10909"
        width="20px"
      />
    </button>
  );
};

export default CloseBtnCircular;
