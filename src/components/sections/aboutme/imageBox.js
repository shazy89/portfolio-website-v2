import React from 'react';
import styled from 'styled-components';

const ImageBoxView = styled.div`
  width: 366px;
  height: 100%;
  border-top: 3px solid #fcbf49;
  border-left: 3px solid #fcbf49;
  border-right: 3px solid #fcbf49;
`;
const Image = styled.img`
  width: 366px;
  height: max-content;
`;

export const ImageBox = () => {
  return (
    <ImageBoxView>
      <Image
        src="https://res.cloudinary.com/dytheecsk/image/upload/c_scale,w_1040/v1638378227/portfolio%20v2/IMG_3184-Recovered_hw2yqs.png"
        alt=""
      />
    </ImageBoxView>
  );
};
