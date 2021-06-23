import React from "react";
import "./index.css";

interface HeaderProps {
  iconsColor?: string;
  onClosePressed: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Header: React.FC<HeaderProps> = ({ iconsColor = "3A3939", onClosePressed }) => {
  return (
    <div className="header w-100 d-flex justify-content-end">
      <div className="mt-3 mx-5 w-100 d-flex justify-content-end">
        <a
          className="mx-3"
          href="https://www.linkedin.com/in/julio-alejandro-romero-bb4197119"
          rel="no-opener noreferrer"
          target="_blank"
        >
          <img
            alt="linkedin"
            src={`https://icongr.am/fontawesome/linkedin-square.svg?size=30&color=${iconsColor}`}
          />
        </a>
        <a
          href="https://github.com/julioale21/alkemy-superheroes-challenge"
          rel="no-opener noreferrer"
          target="_blank"
        >
          <img
            alt=""
            src={`https://icongr.am/fontawesome/github.svg?size=30&color=${iconsColor}`}
          />
        </a>

        <button className="bg-transparent border-0 mx-2" onClick={onClosePressed}>
          <img
            alt="close"
            src={`https://icongr.am/fontawesome/external-link.svg?size=30&color=${iconsColor}`}
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
