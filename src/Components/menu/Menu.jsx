import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/context';
import { navArray } from '../../data';
import './menu.scss';

const Menu = () => {
  const { theme } = useTheme();

  return (
    <div className={`menu ${theme}`}>
      <ul>
        {navArray.map((item) => (
          <li key={item.id}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
