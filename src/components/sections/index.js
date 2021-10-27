import React from 'react';
import { Header } from './header/header';
import { Section } from '../HORComponents/section';
import { images } from '../assets/image.links';

export const HomePage = () => {
  return (
    <>
      <Section section="header" backgroundImage={images.background.header}>
        <Header />
      </Section>
    </>
  );
};
