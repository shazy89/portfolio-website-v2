import React from 'react';
import styled from 'styled-components';
import { DividedScreen } from '../dividedScreen';
import { projects } from '../projectsData';
import { DetailsHeader } from './detailsHeader';
import { DetailsLinks } from './detailsLinks';

export const ProjectDetails = ({ selectedImg }) => {
  const slectedProject = projects.find((project) => project.id === selectedImg);
  console.log(slectedProject);
  return (
    <DividedScreen screen="projectDetails">
      <DetailsHeader>{slectedProject.name}</DetailsHeader>
      <DetailsLinks
        publicId={slectedProject.publicId}
        webApp={slectedProject.webApp}
        demo={slectedProject.demo}
        github={slectedProject.github}
        technologies={slectedProject.technologies}
      />
    </DividedScreen>
  );
};
