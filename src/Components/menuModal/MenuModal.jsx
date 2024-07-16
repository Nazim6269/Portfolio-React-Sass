import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { navArray } from '../../data';
import './_menuModal.scss'; // Ensure you have your SCSS imported

const MenuModal = ({ onClose }) => {
  return (
    <div className="menu-modal">
      <ul className="menu-modal__list">
        {navArray.map((item) => (
          <li key={item.id} className="menu-modal__list-item">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Button variant="outlined" size="small" onClick={onClose}>
        Close
      </Button>
    </div>
  );
};

export default MenuModal;
