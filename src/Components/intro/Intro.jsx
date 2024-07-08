import { Button } from "@mui/material";
import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import "./intro.scss";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer!", "Designer!"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left"></div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I&apos;m</h2>
          <h1>Nazim Uddin</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
          <div className="btn">
            <Button variant="contained" className="button">
              {" "}
              Contact
            </Button>
          </div>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
