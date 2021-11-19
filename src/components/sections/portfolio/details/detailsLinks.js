import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Image, Transformation } from 'cloudinary-react';
import { Link } from './Link';
const DetailsLinksBox = styled.div`
  //clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 81%);
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 35px;
`;
const ImageView = styled(Image)`
  width: ${(props) => props.width + `px`};
  height: ${(props) => props.height + `px`};
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 90%);
  align-self: center;
`;

export const DetailsLinks = ({ publicId, width, height }) => {
  return (
    <DetailsLinksBox>
      <ImageView
        cloudName="dytheecsk"
        publicId={publicId}
        width={width}
        height={height}
      >
        <Transformation width={width * 2} crop="scale" />
      </ImageView>
      <ul>
        <Link>Website</Link>
      </ul>
    </DetailsLinksBox>
  );
};

DetailsLinks.defaultProps = {
  width: 600,
  height: 290,
};
