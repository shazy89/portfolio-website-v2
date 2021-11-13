import React from 'react';
import styled, { useTheme } from 'styled-components';
import { DisplayProjects } from './displayProjects';
import { ProjectDetails } from './projectDetails';

const PortfolioContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScreenDivider = styled.div`
  height: 90%;
  width: 5px;
  background-color: ${(props) => props.color};
`;

export const Portfolio = () => {
  const theme = useTheme();

  return (
    <PortfolioContainer>
      <ProjectDetails />
      <ScreenDivider color={theme.colors.orange.main} />
      <DisplayProjects />
    </PortfolioContainer>
  );
};
