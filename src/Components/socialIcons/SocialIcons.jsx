// SocialIcons.js
import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcons = ({ icons }) => {
  return (
    <div className="footer__social-icons">
      {icons.map((icon) => (
        <Link
          key={icon.id}
          to={icon.url}
          className={`footer__icon ${icon.className}`}
        >
          {icon.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
