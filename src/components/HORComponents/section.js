import React from 'react';
import { SectionBackground } from '../../infrastructure/styled/styledSection';
import { SectionContainer } from '../../infrastructure/styled/styledSectionContainer';
export const Section = ({ backgroundImage, section, children }) => {
  return (
    <SectionBackground section={section} backgroundImage={backgroundImage}>
      <SectionContainer section={section}>{children}</SectionContainer>
    </SectionBackground>
  );
};
