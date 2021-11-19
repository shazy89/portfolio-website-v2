import React from 'react';
import styled, { useTheme } from 'styled-components';
import LeftArrow from '../../../../infrastructure/styled/assets/left_arrow.svg';
import RightArrow from '../../../../infrastructure/styled/assets/right_arrow.svg';

const HeaderView = styled.div`
  width: 100%;
  height: 13%;
  display: flex;
  justify-content: center;
`;
const HeaderText = styled.h2`
  display: flex;
  align-items: center;
  font-size: 40px;
`;

export const DetailsHeader = ({ children }) => {
  const theme = useTheme();
  return (
    <HeaderView>
      <HeaderText color={theme.colors.gray.light}>
        <LeftArrow />
        {children}
        <RightArrow />
      </HeaderText>
    </HeaderView>
  );
};
