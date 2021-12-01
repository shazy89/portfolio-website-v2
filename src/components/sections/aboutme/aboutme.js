import React from 'react';
import { Content } from './content';
import { ImageBox } from './imageBox';
import styled from 'styled-components';

const AboutMeContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Aboutme = () => {
  return (
    <AboutMeContainer>
      {' '}
      <ImageBox />
      <Content />
    </AboutMeContainer>
  );
};
