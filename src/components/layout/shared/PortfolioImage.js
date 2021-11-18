import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';

const ExtendedImage = styled(Image)`
  transition: all 0.1s ease;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
    border-right: 3px solid ${(props) => props.color};
    border-bottom: 3px solid ${(props) => props.color};
  }
`;

export const PortfolioImage = ({ width, height, publicId, altTex, id }) => {
  const theme = useTheme();

  return (
    <ExtendedImage
      color={theme.colors.orange.main}
      id={id}
      height={height}
      width={width}
      alt={altTex}
      cloudName="dytheecsk"
      publicId={publicId}
    >
      <Transformation width={width * 2} crop="scale" />
    </ExtendedImage>
  );
};
PortfolioImage.defaultProps = {
  width: 300,
  height: 170,
};
