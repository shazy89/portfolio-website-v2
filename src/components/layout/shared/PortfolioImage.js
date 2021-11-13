import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

export const PortfolioImage = ({ width, publicId, altTex }) => {
  return (
    <Image
      style={{ height: '160px' }}
      width={width}
      alt={altTex}
      cloudName="dytheecsk"
      publicId={publicId}
    >
      <Transformation width={width} gravity="south" crop="scale" />
    </Image>
  );
};
PortfolioImage.defaultProps = {
  width: 300,
};
