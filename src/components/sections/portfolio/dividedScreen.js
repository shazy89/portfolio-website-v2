import React from 'react';
import styled from 'styled-components';

const DividedScreenBox = styled.div`
  width: 50%;
  height: 90%;
  padding: 5px;
`;

export const DividedScreen = ({ children }) => {
  return <DividedScreenBox>{children}</DividedScreenBox>;
};
