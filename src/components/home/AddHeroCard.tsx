import React from "react";

interface CardProps {
  onAddClick: () => void;
}

const AddHeroCard: React.FC<CardProps> = ({ onAddClick }) => {
  return (
    <div className="col-12 col-sm-6 col-md-3 mt-5 p-1" style={{ minHeight: "300px" }}>
      <div className="h-100 gb-transparent border d-flex justify-content-center align-items-center mt-1 me-2">
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
