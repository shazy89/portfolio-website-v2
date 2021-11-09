import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';

const CardView = styled.div`
  width: 340px;
  height: 490px;
  box-shadow: 10px 10px 6px #2d2d2d6b;
  background-color: ${(props) => props.color};
  transition: all 0.3s ease;
  :hover {
    background-color: #2f2f2fd4;
  }
`;

export const Card = () => {
  const theme = useTheme();

  return <CardView color={theme.colors.black.main} />;
};
