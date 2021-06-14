import React from "react";

interface CardProps {
  onAddClick: () => void;
}

const AddHeroCard: React.FC<CardProps> = ({ onAddClick }) => {
  return (
    <div className="col-12 col-md-3 mt-5 mb-5" style={{ minHeight: "300px" }}>
      <div className="card h-100 bg-light d-flex justify-content-center align-items-center">
        <button className="buttonAdd" onClick={() => onAddClick()}>
          <img
            alt="add hero"
            src="https://icongr.am/fontawesome/plus-circle.svg?size=128&color=currentColor"
            width="50px"
          />
        </button>
      </div>
    </div>
  );
};

export default AddHeroCard;
