import React from 'react';
import { CardSection } from './CardSection';
import styled from 'styled-components';
import Skills from '../../../infrastructure/styled/assets/skills.svg';
const Spacer = styled.div`
  height: ${(props) => props.space}px;
`;
const SkillsIconContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Achievements = () => {
  return (
    <div>
      <Spacer space={80} />
      <CardSection />
      <Spacer space={40} />
      <SkillsIconContainer>
        <Skills />
      </SkillsIconContainer>
    </div>
  );
};
// <img
// style={{ width: '20px', height: '20px' }}
// src={arrowIcon}
// alt="React Logo"
// />
