import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/context';
import { projectsData } from '../../data';
import ProjectsList from '../projectList/ProjectsList';
import './projects.scss';

export default function Projects() {
  const [selectCategory, setSelectCategory] = useState('MERN');
  const { theme } = useTheme();
  const navigate = useNavigate();

  const filteredData = projectsData.filter(
    (item) => item.category === selectCategory,
  );

  if (!filteredData) return;

  const handleImageClick = (itemId, category) => {
    console.log(category);
    navigate(`/projects/${category}/${itemId}`);
  };

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
        {filteredData[0]?.data?.map((item) => (
          <div key={item.id} className="projects__item">
            <div>
              <img
                src={item.img}
                alt={item.title}
                onClick={() => handleImageClick(item.id, selectCategory)}
              />
            </div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
