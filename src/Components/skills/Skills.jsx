import React from 'react';
import { skillsData } from '../../data.js';
import './skills.scss'; // Updated to .scss

export default function Skills() {
  return (
    <div className="skills">
      <h1 className="skills__title">Skills</h1>

      <div className="skills__container">
        {skillsData.map((item) => (
          <div key={item.id} className="skills__card">
            <div className="skills__top">
              <img className="skills__user" src={item.img} alt={item.name} />
            </div>
            <div className="skills__bottom">
              <h3>{item.name}</h3>
              <h4>{item.status}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
