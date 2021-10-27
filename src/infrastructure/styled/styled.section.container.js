import React from 'react';
import styled, { useTheme } from 'styled-components';
import { images } from '../../components/assets/image.links';

export const SectionContainerView = styled.div`
  height: 100%;
  max-width: 1365px;
  margin: 0 auto;
`;
export const SectionContainerViewBackgroundGrey = styled.div`
  height: 100%;
  max-width: 1365px;
  background-color: ${({ color }) => color};
  margin: 0 auto;
`;

export const SectionContainer = ({ section, children }) => {
  const theme = useTheme();
  if (section === 'achievements' || section === 'portfolio') {
    return (
      <SectionContainerViewBackgroundGrey color={theme.colors.gray.main}>
        {children}
      </SectionContainerViewBackgroundGrey>
    );
  }
  return <SectionContainerView>{children}</SectionContainerView>;
};

SectionContainer.defaultProps = {
  section: 'header',
};
