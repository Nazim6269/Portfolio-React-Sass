import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/context';
import { projectsData } from '../../data';
import ProjectsList from '../projectList/ProjectsList';
import './projects.scss';

export default function Projects() {
  const [selectCategory, setSelectCategory] = useState('MERN');
  const { theme } = useTheme();
  const filteredData = projectsData.filter(
    (item) => item.category === selectCategory,
  );
  if (!filteredData) return;

  return (
    <div className={`projects ${theme}`} id="projects">
      <h1>Projects</h1>
      <ul>
        {projectsData.map((item) => (
          <ProjectsList
            category={item.category}
            active={selectCategory === item.category}
            setSelectCategory={setSelectCategory}
            key={item.id}
            id={item.id}
          />
        ))}
      </ul>
      <div className="projects__container">
        {filteredData.map((item) => (
          <Link to={`${item.id}`} key={item.id} className="projects__item">
            <div>
              <img src={item.img} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
