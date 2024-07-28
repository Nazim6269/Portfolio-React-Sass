import { Mail, Person } from '@mui/icons-material';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/context';
import Menu from '../menu/Menu';
import MenuModal from '../menuModal/MenuModal';
import ThemeSwitch from '../themeSwitch/ThemeSwitch';
import './topbar.scss';

const Topbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`topbar ${theme}`}>
      <div className="topbar__wrapper">
        {/* ========= Left portion ========= */}
        <div className="topbar__wrapper__left">
          <div>
            {' '}
            <Link to={'/'} className="topbar__wrapper__left__logo">
              Pro.
            </Link>
          </div>
          <div className="topbar__wrapper__left__item-container">
            <Person className="icon" />
            <span>+44 034 43</span>
          </div>
          <div className="topbar__wrapper__left__item-container">
            <Mail className="topbar__wrapper__left__item-container__icon" />
            <span>nazimuddin@gmail.com</span>
          </div>
          {/* <div className="topbar__wrapper__left__btn">
            <Button variant="contained" className="button">
              {' '}
              Contact
            </Button>
          </div> */}
        </div>

        {/* ======== Middle portion ============= */}

        <div>
          <ThemeSwitch theme={theme} onClick={toggleTheme} />
        </div>

        <div className="topbar__wrapper__middle">
          <Menu />
        </div>

        <div className="topbar__wrapper__right">
          <div
            className={`topbar__wrapper__right__hamburger ${theme}`}
            onClick={() => setShowModal(true)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
        {showModal &&
          createPortal(
            <MenuModal onClose={() => setShowModal(false)} />,
            document.getElementById('modal-root'),
          )}
      </div>
    </div>
  );
};

export default Topbar;
