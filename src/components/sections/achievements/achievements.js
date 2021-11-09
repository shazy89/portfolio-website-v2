import React from 'react';
import { CardSection } from './CardSection';
import styled from 'styled-components';

const Spacer = styled.div`
  height: 80px;
`;

export const Achievements = () => {
  return (
    <div>
      <Spacer />
      <CardSection />
    </div>
  );
};
// <img
// style={{ width: '20px', height: '20px' }}
// src={arrowIcon}
// alt="React Logo"
// />
