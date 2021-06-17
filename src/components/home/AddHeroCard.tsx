import React from "react";

interface CardProps {
  onAddClick: () => void;
}

const AddHeroCard: React.FC<CardProps> = ({ onAddClick }) => {
  return (
    <div
      className="col-8 col-sm-6 col-md-3 col-xl-2 p-1 mt-5 mb-5 mb-sm-0"
      data-aos="fade-up"
      style={{ minHeight: "300px" }}
    >
      <div
        className="h-100 gb-transparent d-flex justify-content-center align-items-center me-2"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      >
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
