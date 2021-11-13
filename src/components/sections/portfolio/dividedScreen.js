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

export const DividedScreen = ({ children, screen }) => {
  return <DividedScreenBox>{children}</DividedScreenBox>;
};
