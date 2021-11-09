import React from 'react';
import { Card } from '../../layout/shared/card/styled';
import styled from 'styled-components';

import Arrows from '../../../infrastructure/styled/assets/arrows.svg';

const Spacer = styled.div`
  height: 80px;
`;

export const Achievements = () => {
  return (
    <div>
      <Spacer />

      <Card icon={Arrows}>Hey There</Card>
    </div>
  );
};
// <img
// style={{ width: '20px', height: '20px' }}
// src={arrowIcon}
// alt="React Logo"
// />
