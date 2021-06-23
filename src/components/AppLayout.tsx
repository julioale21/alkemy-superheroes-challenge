import React from "react";
import Header from "./Header";

const AppLayout: React.FC = ({ children }) => (
  <div>
    <Header onClosePressed={() => {}} />
    {children}
  </div>
);

export default AppLayout;
