import { useEffect, useState } from 'react';
import './projects.scss';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
  projectList,
} from '../../data';
import PortfolioList from '../projectList/ProjectsList';

export default function Projects() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(webPortfolio);
        break;
      case 'mobile':
        setData(mobilePortfolio);
        break;
      case 'design':
        setData(designPortfolio);
        break;
      case 'content':
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <ul>
        {projectList.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            key={item.id}
            id={item.id}
          />
        ))}
      </ul>
      <div className="projects__container">
        {data.map((item) => (
          <div key={item.id} className="projects__item">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
