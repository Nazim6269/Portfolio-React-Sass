import { Mail, Person } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import Menu from "../menu/Menu";
import "./topbar.scss";

const Topbar = () => {
  return (
    <div className={"topbar "}>
      <div className="wrapper">
        {/* ========= Left portion ========= */}
        <div className="left">
          <div>
            {" "}
            <a href="#intro" className="logo">
              Pro.
            </a>
          </div>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+44 034 43</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>nazimuddin@gmail.com</span>
          </div>
          <div className="btn">
            <Button variant="contained" className="button">
              {" "}
              Contact
            </Button>
          </div>
        </div>
        {/* ======== Middle portion ============= */}
        <div className="middle">
          <Menu />
        </div>

        {/* <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Topbar;
