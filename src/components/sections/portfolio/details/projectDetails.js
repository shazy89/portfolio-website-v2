import React from 'react';

import { DividedScreen } from '../dividedScreen';
import { projects } from '../projectsData';

export const ProjectDetails = ({ selectedImg }) => {
  const slected = projects.find((project) => project.id === selectedImg);
  console.log(slected);
  return (
    <DividedScreen screen="projectDetails">
      <h1>More about the project</h1>
    </DividedScreen>
  );
};
