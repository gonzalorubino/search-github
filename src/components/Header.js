import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchHome from "../SearchHome";

import "../css/Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className={location.pathname.indexOf("search") > 0 ? "results" : ''}>
      {location && location.pathname === "/" && (
        <img
          className="header-logo"
          src="./GithubLogo.png"
          alt="Github Search Logo"
        />
      )}
      {location && location.pathname.indexOf("search") > 0 && (
        <div>
          <Link to="/">
            <img
              className="header-logo small-logo"
              src="./GithubLogo.png"
              alt="Github Search Logo"
            />
          </Link>
          <SearchHome></SearchHome>
        </div>
      )}
    </header>
  );
};

export default Header;
