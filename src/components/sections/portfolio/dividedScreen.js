import React from 'react';
import styled from 'styled-components';

const DividedScreenBox = styled.div`
  width: 50%;
  height: 90%;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;
const ScreenProjectDetails = styled.div`
  width: 50%;
  height: 90%;
  padding: 5px;
  display: flex;

  justify-content: space-evenly;
  align-items: center;
`;

export const DividedScreen = ({ children, screen }) => {
  if (screen === 'projectDetails') {
    console.log(screen);
    return <ScreenProjectDetails>{children}</ScreenProjectDetails>;
  }
  return <DividedScreenBox>{children}</DividedScreenBox>;
};
