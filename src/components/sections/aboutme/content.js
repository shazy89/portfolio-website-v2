import React from 'react';
import styled from 'styled-components';
import { Spacer } from '../../spacer/spacerComponent';
import { LogoImg } from './LogoImg';
const ContentView = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const OrangeLine = styled.div`
  border-top: 3px solid #fcbf49;
  width: 20%;
  margin-left: 4rem;
`;
const ContentText = styled.p`
  font-size: 30px;
  width: 762px;
  margin-left: 30px;
  line-height: 40px;
`;

const ContentHeader = styled.h1`
  font-size: 40px;
  margin-left: 30px;
`;

export const Content = () => {
  return (
    <ContentView>
      <Spacer position="top" size="xl" />
      <ContentHeader>About Me</ContentHeader>
      <Spacer position="top" size="medium" />
      <OrangeLine />
      <Spacer position="top" size="xl" />

      <ContentText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ContentText>
      <div>
        <LogoImg />
      </div>
    </ContentView>
  );
};
