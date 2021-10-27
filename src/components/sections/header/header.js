import React from 'react';
import { SectionBackground } from '../../../infrastructure/styled/styled.section';

export const Header = () => {
  return (
    <header>
      <SectionBackground
        backgroundImage={
          'https://res.cloudinary.com/dytheecsk/image/upload/v1635290307/portfolio%20v2/Background_2x_na9ker.jpg'
        }
      >
        Header
      </SectionBackground>
    </header>
  );
};
