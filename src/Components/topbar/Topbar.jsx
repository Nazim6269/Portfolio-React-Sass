import { Mail, Person } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import { useTheme } from '../../context/context';
import Menu from '../menu/Menu';
import ThemeSwitch from '../themeSwitch/ThemeSwitch';
import './topbar.scss';

const Topbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`topbar ${theme}`}>
      <div className="topbar__wrapper">
        {/* ========= Left portion ========= */}
        <div className="topbar__wrapper__left">
          <div>
            {' '}
            <a href="#intro" className="topbar__wrapper__left__logo">
              Pro.
            </a>
          </div>
          <div className="topbar__wrapper__left__item-container">
            <Person className="icon" />
            <span>+44 034 43</span>
          </div>
          <div className="topbar__wrapper__left__item-container">
            <Mail className="topbar__wrapper__left__item-container__icon" />
            <span>nazimuddin@gmail.com</span>
          </div>
          <div className="topbar__wrapper__left__btn">
            <Button variant="contained" className="button">
              {' '}
              Contact
            </Button>
          </div>
        </div>

        {/* ======== Middle portion ============= */}

        <div>
          <ThemeSwitch theme={theme} onClick={toggleTheme} />
        </div>

        <div className="topbar__wrapper__middle">
          <Menu />
        </div>

        <div className="topbar__wrapper__right">
          <div className={`topbar__wrapper__right__hamburger ${theme}`}>
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
