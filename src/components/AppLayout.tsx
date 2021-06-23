import React from "react";
import Header from "./Header";

interface Props {
  onExit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AppLayout: React.FC<Props> = ({ onExit, children }) => (
  <div>
    <Header onClosePressed={onExit} />
    {children}
  </div>
);

export default AppLayout;
