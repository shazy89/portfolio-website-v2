import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';

const ExtendedImage = styled(Image)`
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
    border-right: 3px solid ${(props) => props.color};
    border-bottom: 3px solid ${(props) => props.color};
    opacity: 0.8;
  }
`;
const SelectedImage = styled(Image)`
  transition: all 0.1s ease;
  cursor: pointer;
  transform: scale(1.02);
  border-right: 3px solid ${(props) => props.color};
  border-bottom: 3px solid ${(props) => props.color};
  opacity: 0.8;
`;

export const PortfolioImage = ({
  selectedImg,
  width,
  height,
  publicId,
  altTex,
  id,
  setSelectedImg,
}) => {
  const theme = useTheme();

  return (
    <>
      {selectedImg ? (
        <SelectedImage
          color={theme.colors.orange.main}
          id={id}
          height={height}
          width={width}
          alt={altTex}
          cloudName="dytheecsk"
          publicId={publicId}
        >
          {' '}
          <Transformation width={width * 2} crop="scale" />
        </SelectedImage>
      ) : (
        <ExtendedImage
          color={theme.colors.orange.main}
          id={id}
          height={height}
          width={width}
          alt={altTex}
          cloudName="dytheecsk"
          onClick={() => setSelectedImg(id)}
          publicId={publicId}
        >
          <Transformation width={width * 2} crop="scale" />
        </ExtendedImage>
      )}
    </>
  );
};
PortfolioImage.defaultProps = {
  width: 300,
  height: 170,
};
