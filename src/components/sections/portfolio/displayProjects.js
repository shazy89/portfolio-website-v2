import React from 'react';

import { DividedScreen } from './dividedScreen';

import { PortfolioImage } from '../../layout/shared/PortfolioImage';
import { projects } from './projectsData';
export const DisplayProjects = ({ setSelectedImg, selectedImg }) => {
  const displayTheProjects = projects.map((project) => (
    <PortfolioImage
      id={project.id}
      key={project.id}
      publicId={project.publicId}
      altTex={project.altText}
      selectedImg={project.id == selectedImg ? true : false}
      setSelectedImg={setSelectedImg}
    />
  ));

  return (
    <DividedScreen screen="projectDetails">{displayTheProjects}</DividedScreen>
  );
};
