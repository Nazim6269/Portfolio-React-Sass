import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { useTheme } from '../../context/context';
import TypingAnimation from '../../utils/typingAnimation/TypingAnimagtion';
import './intro.scss';

const Intro = () => {
  const { theme } = useTheme();

  const handleDownload = () => {
    window.open('Resume.pdf', '_blank');
  };
  return (
    <div className={`intro ${theme}`} id="intro">
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
              <Button
                variant="contained"
                className="button"
                onClick={handleDownload}
              >
                {' '}
                Download CV
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
            <img
              className="intro__ninjaIcon"
              src="/introImage/icon_1.png"
              alt="Icon X"
            />
          </motion.div>
          <motion.div
            animate={{ y: 100 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 7,
            }}
          >
            <img
              className="intro__planeIcon"
              src="/introImage/cartoon.png"
              alt="Icon Y"
            />
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
              src="/introImage/icon_1.png"
              alt="Icon Rotate"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
