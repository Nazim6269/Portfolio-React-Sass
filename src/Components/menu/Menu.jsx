import React from "react";
import "./menu.scss";

const Menu = () => {
  return (
    <div className={"menu "}>
      <ul>
        <li>
          <a href="#intro">Home</a>
        </li>

        <li>
          <a href="#portfolio">Projects</a>
        </li>

        <li>
          <a href="#work">Work</a>
        </li>

        <li>
          <a href="#testimonial">Skills</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
