import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../scss/header.scss";
import LogoSvg from "../elements/LogoSvg";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <LogoSvg fill="#FF6060" />
      <div className="nav-links">
        <NavLinks to="/" currentPath={location.pathname} color="#FF6060">
          Accueil
        </NavLinks>
        <NavLinks to="/about" currentPath={location.pathname} color="#FF6060">
          A Propos
        </NavLinks>
      </div>
    </header>
  );
};

const NavLinks = ({ to, currentPath, children, color }) => {
  const isActive = to === currentPath;

  return (
    <Link
      to={to}
      style={
        isActive
          ? { textDecoration: "underline", fill: color }
          : { fill: color }
      }
    >
      {children}
    </Link>
  );
};

export default Header;
