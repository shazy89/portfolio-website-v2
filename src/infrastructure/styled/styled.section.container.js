import React from 'react';
import styled, { useTheme } from 'styled-components';
import { images } from '../../components/assets/image.links';

const theme = useTheme();

export const SectionContainerView = styled.div`
  height: 100%;
  width: 1365px;
`;
export const SectionContainerViewBackgroundGrey = styled.div`
  height: 100%;
  width: 1365px;
  background-color: ${theme.colors.gray.main};
`;

export const SectionContainer = ({ section, children }) => {
  if (section === 'achievements' || section === 'portfolio') {
    return (
      <SectionContainerViewBackgroundGrey>
        {children}
      </SectionContainerViewBackgroundGrey>
    );
  }
  return <SectionContainerView>{children}</SectionContainerView>;
};

SectionBackground.defaultProps = {
  section: 'header',
};
