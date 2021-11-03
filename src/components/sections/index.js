import React from 'react';
import { Header } from './header/header';
import { Achievements } from './achievements/achievements';
import { Section } from '../HORComponents/section';
import { images } from '../assets/image.links';
import { Spacer } from '../spacer/spacer.component';
import combo from '../../infrastructure/styled/assets/combo.svg';
export const HomePage = () => {
  return (
    <>
      <Section section="header" backgroundImage={images.background.header}>
        <Header />
      </Section>
      <Spacer size="xxl" />
      <Section section="achievements" backgroundImage={combo}>
        <Achievements />
      </Section>

      <Spacer size="xxl" />
    </>
  );
};
