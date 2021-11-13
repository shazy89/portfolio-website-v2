import React from 'react';
import styled, { useTheme } from 'styled-components';
import { DividedScreen } from './dividedScreen';
import { StaticImage } from 'gatsby-plugin-image';
import { PortfolioImage } from '../../layout/shared/PortfolioImage';
import { projects } from './projectsData';
export const DisplayProjects = () => {
  const displayTheProjects = projects.map((project, ind) => (
    <PortfolioImage
      key={ind}
      publicId={project.publicId}
      altTex={project.altText}
    />
  ));

  return (
    <DividedScreen screen="projectDetails">{displayTheProjects}</DividedScreen>
  );
};
