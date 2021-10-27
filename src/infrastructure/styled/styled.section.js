import React from 'react';
import styled from 'styled-components';
import { images } from '../../components/assets/image.links';

export const SectionView = styled.div`
  background-image: url(${({ backgroundImage }) => backgroundImage || 'none'});
  height: 767px;
  background-size: cover;
  background-position: top;
  position: relative;
`;
export const SectionViewHeader = styled.div`
  background-image: linear-gradient(#2f2f2fc4, #2f2f2f61),
    url(${({ backgroundImage }) => backgroundImage || 'none'});
  height: 767px;
  background-size: cover;
  background-position: top;
  position: relative;
`;

export const SectionBackground = ({ backgroundImage, children, section }) => {
  if (section === 'header') {
    return (
      <SectionViewHeader backgroundImage={backgroundImage}>
        {children}
      </SectionViewHeader>
    );
  }
  return (
    <SectionView backgroundImage={backgroundImage}>{children}</SectionView>
  );
};

SectionBackground.defaultProps = {
  backgroundImage: images.background.header,
  section: 'header',
};
