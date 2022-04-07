import React from "react";
import Footer from "./Footer.js";
import NavbarDetails from "./NavbarDetails.js";

const LayoutDetails = ({ children }) => {
  return (
    <div className="global-container h-100">
      <NavbarDetails />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutDetails;
