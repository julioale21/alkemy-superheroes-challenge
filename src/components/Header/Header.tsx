import React from "react";
import "./index.css";

const Header = () => {
  return (
    <div className="header d-flex justify-content-end">
      <div className="mt-3 mx-5 w-100 d-flex justify-content-end">
        <a className="mx-3" href="https://www.linkedin.com/check/manage-account">
          <img
            alt="linkedin"
            src="https://icongr.am/fontawesome/linkedin-square.svg?size=30&color=faf5f5"
          />
        </a>
        <a
          href="https://github.com/julioale21/alkemy-superheroes-challenge"
          rel="no-opener noreferrer"
          target="_blank"
        >
          <img alt="" src="https://icongr.am/fontawesome/github.svg?size=30&color=faf5f5" />
        </a>

        <button className="bg-transparent border-0 mx-2">
          <img
            alt="close"
            src="https://icongr.am/fontawesome/external-link.svg?size=30&color=faf5f5"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
