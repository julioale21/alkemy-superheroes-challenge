import React from "react";
import Header from "../Header";
import "../../App.css";

interface Props {
  onExit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AppLayout: React.FC<Props> = ({ onExit, children }) => (
  <div className="App">
    <Header onClosePressed={onExit} />
    {children}
  </div>
);

export default AppLayout;
