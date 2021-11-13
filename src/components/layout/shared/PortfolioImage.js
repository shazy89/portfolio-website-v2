import React from 'react';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import { projects } from '../../sections/portfolio/projectsData';

export const PortfolioImage = ({ width }) => {
  return (
    <Image cloudName="dytheecsk" publicId={projects[0].publicId}>
      <Transformation width="300" gravity="south" crop="scale" />
    </Image>
  );
};
