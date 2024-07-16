import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { projectsData } from '../../data';
import './_projectDetails.scss';

const ProjectDetailsPage = () => {
  const { projectId } = useParams();

  const project = projectsData.find(
    (project) => project.id.toString() === projectId,
  );

  if (!project) {
    return <div>Project not found!</div>;
  }

  const {
    id,
    title,
    description,
    technologies,
    screenshots,
    demoLink,
    githubLink,
  } = project;

  return (
    <div className="project-details">
      <h2>{title}</h2>
      <p>{description}</p>

      <h3>Technologies Used:</h3>
      <ul>
        {technologies.map((tech) => (
          <li key={id}>{tech}</li>
        ))}
      </ul>

      <h3>Screenshots:</h3>
      <div className="screenshots">
        {screenshots.map((screenshot) => (
          <img key={id} src={screenshot} alt={`Screenshot ${id + 1}`} />
        ))}
      </div>

      {demoLink && (
        <div>
          <Link to={demoLink}>Live Demo</Link>
        </div>
      )}

      {githubLink && (
        <div>
          <Link to={githubLink}>GitHub Repository</Link>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsPage;
