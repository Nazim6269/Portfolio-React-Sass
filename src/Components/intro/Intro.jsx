import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import TypingAnimation from '../../utils/typingAnimation/TypingAnimagtion';
import './intro.scss';

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="intro__wrapper">
        {/* ===============left section========== */}
        <div className="intro__left">
          <div className="intro__item-container">
            <h2>Hi There, I&apos;m</h2>
            <h1>Nazim Uddin</h1>
            <h3>
              Freelance with{' '}
              <span>
                <TypingAnimation text={'Developer'} delay={500} infinite />
              </span>
            </h3>
            <div className="intro__btn">
              <Button variant="contained" className="button">
                {' '}
                Contact
              </Button>
            </div>
          </div>
        </div>
        {/* ==============right section============== */}
        <div className="intro__right">
          <motion.div
            animate={{ x: -100 }}
            className="intro__icon-ninja-container"
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 5,
            }}
          >
            <img className="intro__ninjaIcon" src="icon_1.png" alt="Icon X" />
          </motion.div>
          <motion.div
            animate={{ y: 100 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 7,
            }}
          >
            <img className="intro__planeIcon" src="Furore.png" alt="Icon Y" />
          </motion.div>
          <motion.div
            animate={{ x: 100 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 7,
            }}
          >
            <img
              className="intro__cartoonIcon"
              src="icon_3.png"
              alt="Icon Rotate"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
