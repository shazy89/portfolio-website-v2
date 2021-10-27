import React from 'react';
import styled, { useTheme } from 'styled-components';
import { images } from '../../components/assets/image.links';

export const SectionBox = styled.div`
  height: 767px;
  width: 100%;
`;

export const SectionView = styled.div`
  background-image: url(${({ backgroundImage }) => backgroundImage || 'none'});
  height: 767px;
  background-size: cover;
  background-position: top;
  position: relative;
`;

export const SectionBackground = ({ backgroundImage, children }) => {
  return (
    <SectionView backgroundImage={backgroundImage}>{children}</SectionView>
  );
};

SectionBackground.defaultProps = {
  backgroundImage: images.background.header,
};
