import React from "react";
import "./Layout.css";

const Layout: React.FC = ({ children }) => {
  return <div className="Layout">{children}</div>;
};

export default Layout;
