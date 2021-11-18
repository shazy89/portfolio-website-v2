import React from 'react';
import styled, { useTheme } from 'styled-components';
import { DividedScreen } from '../dividedScreen';
import { StaticImage } from 'gatsby-plugin-image';
import { projects } from '../projectsData';
import { PortfolioImage } from '../../../layout/shared/PortfolioImage';

export const ProjectDetails = () => {
  return (
    <DividedScreen screen="projectDetails">
      <h1>More about the project</h1>
    </DividedScreen>
  );
};
