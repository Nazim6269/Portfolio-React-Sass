import React from 'react';
import './footer.scss'; // Assuming you save the SASS file as footer.scss

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section footer__section--social">
          <h4 className="footer__title">Follow Us</h4>
          <div className="footer__social-icons">
            <a href="#" className="footer__icon footer__icon--facebook">
              Facebook
            </a>
            <a href="#" className="footer__icon footer__icon--twitter">
              Twitter
            </a>
            <a href="#" className="footer__icon footer__icon--instagram">
              Instagram
            </a>
            <a href="#" className="footer__icon footer__icon--linkedin">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="footer__section footer__section--contact">
          <h4 className="footer__title">Contact Us</h4>
          <p className="footer__text">
            Al falah goli, sholo-shohor, Chittagong, Bangladesh
          </p>
          <p className="footer__text">Email: nazimuddin102001@gmail.com</p>
          <p className="footer__text">Phone: +8801518-373269</p>
        </div>
        <div className="footer__section footer__section--links">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Contact
              </a>
            </li>
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
