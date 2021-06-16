import React from "react";

interface CardProps {
  onAddClick: () => void;
}

const AddHeroCard: React.FC<CardProps> = ({ onAddClick }) => {
  return (
    <div className="col-12 col-sm-6 col-md-3 col-xl-2 mt-5 p-1" style={{ minHeight: "300px" }}>
      <div className="h-100 gb-transparent border d-flex justify-content-center align-items-center mt-1 me-2">
        <button className="buttonAdd bg-transparent border-0" onClick={onAddClick}>
          <img
            alt="add hero"
            src="https://icongr.am/fontawesome/plus-circle.svg?size=128&color=ffffff"
            width="50px"
          />
        </button>
      </div>
    </div>
  );
};

export default AddHeroCard;
