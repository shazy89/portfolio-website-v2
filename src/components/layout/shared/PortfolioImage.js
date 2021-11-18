import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

export const PortfolioImage = ({ width, height, publicId, altTex }) => {
  return (
    <Image
      height={height}
      width={width}
      alt={altTex}
      cloudName="dytheecsk"
      publicId={publicId}
    >
      <Transformation width={width * 2} crop="scale" />
    </Image>
  );
};
PortfolioImage.defaultProps = {
  width: 300,
  height: 170,
};
