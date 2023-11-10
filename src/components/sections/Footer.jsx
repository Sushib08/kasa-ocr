import React from "react";
import "../scss/footer.scss";
import LogoSvg from "../elements/LogoSvg";

const Footer = () => {
  return (
    <footer>
      <div className="logo-footer">
        <LogoSvg fill="white" />
      </div>
      <p className="rights">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
