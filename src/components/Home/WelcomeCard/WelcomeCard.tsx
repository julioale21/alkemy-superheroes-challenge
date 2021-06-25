import React from "react";

const WelcomeCard: React.FC = () => {
  return (
    <div className="welcome text-white">
      <h3 className="welcome-title">Welcome to Alkemy Challenge!</h3>
      <p className="text-sm">
        Solved by{" "}
        <a
          href="https://github.com/julioale21"
          rel="no-opener noreferrer"
          style={{ color: "inherit" }}
          target="_blank"
        >
          @JulioRomero
        </a>
      </p>
      <a className="btn-start px-4 py-2" href="#team-section">{`Let's start!`}</a>
    </div>
  );
};

export default WelcomeCard;
