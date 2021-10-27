import React from 'react';
import { SectionBackground } from '../../infrastructure/styled/styled.section';
export const Section = ({ backgroundImage, component: Component }) => {
  return (
    <SectionBackground backgroundImage={backgroundImage}></SectionBackground>
  );
};
