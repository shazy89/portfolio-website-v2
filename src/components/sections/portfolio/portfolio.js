import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { DisplayProjects } from './displayProjects';
import { ProjectDetails } from './details/projectDetails';

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
  const [selectedImg, setSelectedImg] = useState(1);
  const theme = useTheme();

  return (
    <PortfolioContainer>
      <ProjectDetails selectedImg={selectedImg} />
      <ScreenDivider color={theme.colors.orange.main} />
      <DisplayProjects
        selectedImg={selectedImg}
        setSelectedImg={setSelectedImg}
      />
    </PortfolioContainer>
  );
};
