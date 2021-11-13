import React from 'react';
import styled, { useTheme } from 'styled-components';

const PortfolioContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ScreenDivider = styled.div`
  height: 100%;
  width: 5px;
  background-color: ${(props) => props.color};
`;

export const Portfolio = () => {
  const theme = useTheme();

  return (
    <PortfolioContainer>
      <div></div>
      <ScreenDivider color={theme.colors.orange.main} />
      <div></div>
    </PortfolioContainer>
  );
};
