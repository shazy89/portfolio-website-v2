import React from 'react';
import { DividedScreen } from '../dividedScreen';
import { projects } from '../projectsData';
import { DetailsHeader } from './detailsHeader';
import { DetailsLinks } from './detailsLinks';

export const ProjectDetails = ({ selectedImg }) => {
  const slected = projects.find((project) => project.id === selectedImg);

  return (
    <DividedScreen screen="projectDetails">
      <DetailsHeader>{slected.name}</DetailsHeader>
      <DetailsLinks publicId={slected.publicId} />
    </DividedScreen>
  );
};
