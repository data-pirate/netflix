import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Search from "./Search";
import "./styles.css";

const links = ["Home", "Movies", "Series", "DVD"];

function Header(props) {
  return (
    <div className="header">
      <Logo />
      <div className="links">
        {props.loggedIn
          ? links.map((each) => (
              <Link key={each} className="link" to={`/${each.toLowerCase()}`}>{each}</Link>
            ))
          : ["Login", "Register"].map((each) => (
            <Link key={each} className="link" to={`/${each.toLowerCase()}`}>{each}</Link>
            ))}
      </div>
      <Search />
    </div>
  );
}

export default Header;
