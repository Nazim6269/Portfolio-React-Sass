import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { navArray } from '../../data';
import './_menuModal.scss';

const MenuModal = ({ onClose }) => {
  const handleClick = () => {
    onClose();
  };

  return (
    <div className="menu-modal">
      <ul className="menu-modal__list">
        {navArray.map((item) => (
          <li key={item.id} className="menu-modal__list-item">
            <Link to={item.path} onClick={handleClick}>
              {item.name}
            </Link>
          </li>
        ))}

        <button className="menu-modal__btn" onClick={onClose}>
          Close
        </button>
      </ul>
    </div>
  );
};

export default MenuModal;
