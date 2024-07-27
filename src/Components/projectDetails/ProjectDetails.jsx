import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projectsData } from '../../data';
import ImageModal from '../imageModal/ImageModal';
import './_projectDetails.scss';

const ProjectDetailsPage = () => {
  const { projectId, category } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const cataogorizedData = projectsData.reduce((acc, cur) => {
    if (cur.category === category) {
      acc.push(...cur.data);
    }
    return acc;
  }, []);

  const project = cataogorizedData?.find(
    (project) => project?.id?.toString() === projectId,
  );

  if (!project) {
    return <div>Project not found!</div>;
  }

  const {
    title,
    technologies,
    screenshots,
    description,
    id,
    demoLink,
    githubLink,
  } = project;

  const handleSSClick = (imgSrc) => {
    console.log(imgSrc);
    setSelectedImage(imgSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="project-details-container">
      <div className="project-details">
        <h2>{title}</h2>
        <p>{description}</p>

        <h3>Features</h3>
        <ol>
          <li>I love my profession</li>
          <li>I love my profession</li>
          <li>I love my profession</li>
          <li>I love my profession</li>
        </ol>

        <h3>Technologies Used</h3>
        <ul>
          {technologies?.map((tech) => (
            <li key={id}>{tech}</li>
          ))}
        </ul>

        <h3>Screenshots</h3>

        <div className="screenshots">
          {screenshots?.map((screenshot) => (
            <img
              key={id}
              src={screenshot}
              alt={`Screenshot ${id + 1}`}
              onClick={() => handleSSClick(screenshot)}
            />
          ))}
        </div>

        <div className="project-details_btn">
          <div className="project-details_btn-item">
            {demoLink && (
              <div>
                <Button variant="contained">
                  <Link to={demoLink}>Live Demo</Link>
                </Button>
              </div>
            )}
          </div>

          <div className="project-details_btn-item">
            {' '}
            {githubLink && (
              <div>
                <Button variant="contained">
                  <Link to={githubLink}>GitHub Repository</Link>
                </Button>
              </div>
            )}
          </div>
        </div>

        {selectedImage && (
          <ImageModal imageSrc={selectedImage} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
