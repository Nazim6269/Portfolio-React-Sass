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

const Footer = ({ location }) => {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer__content">
        <div className="footer__section footer__section--social">
          <h4 className="footer__title">Follow me</h4>
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
          <ul className="footer__links">
            <NavLinks navArray={navArray} />
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__text">© 2024 Nazim Uddin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
