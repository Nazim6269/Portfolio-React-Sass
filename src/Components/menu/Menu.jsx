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
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#work">Work</a>
        </li>

        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
