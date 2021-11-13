import React from 'react';
import styled, { useTheme } from 'styled-components';
import { DividedScreen } from './dividedScreen';
import { StaticImage } from 'gatsby-plugin-image';
import { projects } from './projectsData';
import { PortfolioImage } from '../../layout/shared/PortfolioImage';
export const ProjectDetails = () => {
  return (
    <DividedScreen>
      <StaticImage
        src="https://res.cloudinary.com/dytheecsk/image/upload/c_scale,w_300/v1625076921/projects/Screen_Shot_2021-06-30_at_7.16.01_PM_pzqi1o.png"
        alt="A kitten"
      />
      <PortfolioImage />
    </DividedScreen>
  );
};
