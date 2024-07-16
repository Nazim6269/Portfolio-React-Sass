import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/context';

const NavLinks = ({ navArray }) => {
  const theme = useTheme();
  return (
    <div>
      {navArray.map((item) => (
        <li key={item.id}>
          <Link to={item.path} className={`footer__link ${theme}`}>
            {item.name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default NavLinks;
