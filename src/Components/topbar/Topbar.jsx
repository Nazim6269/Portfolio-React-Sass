import { Mail, Person } from "@mui/icons-material";
import React from "react";
import "./topbar.scss";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Pro.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+44 034 43</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>nazimuddin@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
