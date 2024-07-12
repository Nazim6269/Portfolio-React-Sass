import { Button } from "@mui/material";
import { motion } from "framer-motion";
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
      <div className="introWrapper">
        {/* ===============left section========== */}
        <div className="left">
          <div className="wrapper">
            <h2>Hi There, I&apos;m</h2>
            <h1>Nazim Uddin</h1>
            <h3>
              Freelance with <span ref={textRef}></span>
            </h3>
            <div className="btn">
              <Button variant="contained" className="button">
                {" "}
                Contact
              </Button>
            </div>
          </div>
        </div>
        {/* ==============right section============== */}
        <div className="right">
          <motion.div
            className="ninjaIcon"
            animate={{ x: -100 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5,
            }}
          >
            <img src="icon_1.png" alt="Icon X" />
          </motion.div>
          <motion.div
            animate={{ y: 100 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 7,
            }}
          >
            <img src="Furore.png" alt="Icon Y" />
          </motion.div>
          <motion.div
            animate={{ x: 100 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 7,
            }}
          >
            <img src="icon_3.png" alt="Icon Rotate" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
