import React from 'react';
import { SectionBackground } from '../../infrastructure/styled/styled.section';
import { SectionContainer } from '../../infrastructure/styled/styled.section.container';
export const Section = ({ backgroundImage, section, children }) => {
  return (
    <SectionBackground section={section} backgroundImage={backgroundImage}>
      <SectionContainer section={section}>{children}</SectionContainer>
    </SectionBackground>
  );
};
