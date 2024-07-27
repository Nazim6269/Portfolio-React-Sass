import { motion, useScroll } from 'framer-motion';
import React from 'react';
import {
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialLinkedin,
  TiSocialTwitter,
} from 'react-icons/ti';
import { useTheme } from '../../context/context';
import { navArray } from '../../data';
import NavLinks from '../navLinks/NavLinks';
import SocialIcons from '../socialIcons/SocialIcons';
import './footer.scss';

const socialIcons = [
  {
    id: 1,
    url: 'https://www.facebook.com/profile.php?id=100047297413525',
    className: 'footer__icon--facebook',
    icon: <TiSocialFacebook />,
  },
  {
    id: 2,
    url: '#',
    className: 'footer__icon--twitter',
    icon: <TiSocialTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/nazim-uddin-23a93a216/',
    className: 'footer__icon--linkedin',
    icon: <TiSocialLinkedin />,
  },
  {
    id: 4,
    url: 'https://github.com/Nazim6269',
    className: '',
    icon: <TiSocialGithub />,
  },
];

//TODO: Animation with scroll

const Footer = ({ location }) => {
  const { theme } = useTheme();
  const scroll = useScroll();

  return (
    <footer className={`footer ${theme}`}>
      {/* <img src="/projectImages/NU 4.png" /> */}
      <div className="footer__content">
        <div className="footer__section footer__section--social">
          <motion.div
            className="footer__title"
            style={{ scaleX: scroll.scrollYProgress }}
          >
            Follow me
          </motion.div>
          {/* ================social icons componenst=============== */}
          <div className="footer__social-icons">
            <SocialIcons icons={socialIcons} />
          </div>
        </div>
        <div className="footer__section footer__section--contact">
          <h4 className="footer__title">Contact me</h4>
          <p className="footer__text">{location}</p>
          <p className="footer__text">Email: nazimuddin102001@gmail.com</p>
          <p className="footer__text">Phone: +8801518-373269</p>
        </div>
        <div className="footer__section footer__section--links">
          <h4 className="footer__title">Quick Links</h4>
          {/* ========== nav links component ============= */}
          <motion.div
            className="footer__links"
            style={{ scaleX: scroll.scrollYProgress }}
          >
            <NavLinks navArray={navArray} />
          </motion.div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__text">© 2024 Nazim Uddin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
