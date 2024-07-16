import React from 'react';
import './menu.scss';
import { useTheme } from '../../context/context';
import { Link } from 'react-router-dom';

const Menu = () => {
  const { theme } = useTheme();
  return (
    <div className={`menu ${theme}`}>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>

        <li>
          <Link to={'/projects'}>Projects</Link>
        </li>

        <li>
          <Link to={'/work'}>Work</Link>
        </li>

        <li>
          <Link to={'/skills'}>Skills</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
