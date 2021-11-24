import React from 'react';
import { Header } from './header/header';
import { Achievements } from './achievements/achievements';
import { Section } from '../HORComponents/section';
import { images } from '../assets/imageLinks';
import { Spacer } from '../spacer/spacerComponent';
import { Portfolio } from './portfolio/portfolio';

export const HomePage = () => {
  return (
    <>
      <Section section="header" backgroundImage={images.background.header}>
        <Header />
      </Section>
      <Spacer size="xxl" />
      <Section
        section="achievements"
        backgroundImage="https://res.cloudinary.com/dytheecsk/image/upload/v1635943746/portfolio%20v2/Group_46_g3zlwz.svg"
      >
        <Achievements />
      </Section>
      <Spacer size="xxl" />
      <Spacer size="xxl" />
      <Section section="portfolio">
        <Portfolio />
      </Section>
      <Spacer size="xxl" />
    </>
  );
};
