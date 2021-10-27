import React from 'react';
import styled, { useTheme } from 'styled-components';

const positionVariant = {
  top: 'border-top',
  bottom: 'border-bottom',
  left: 'border-left',
  right: 'border-right',
};
const sizes = {
  sm: '30%',
  md: '50%',
  lg: '70%',
  xxl: '100%',
};

const BorderTopOrBottom = styled.div`
  ${({ position }) => positionVariant[position]}: 5px solid #FCBF49;
  width: ${({ size }) => sizes[size]};
  position: absolute;
  ${({ position }) => position}: 0;
  ${({ edge }) => edge}: 0;
`;

const SideBorders = styled.div`
  position: absolute;
  ${({ position }) => positionVariant[position]}: 5px solid #FCBF49;
  height: ${({ size }) => sizes[size]};
  ${({ position }) => position}: 0;
  ${({ edge }) => edge}: 0;
  width: 0;
`;

export const Border = ({ position, size, color, edge }) => {
  const theme = useTheme();
  if (position === 'top' || position === 'bottom') {
    return <BorderTopOrBottom position={position} size={size} edge={edge} />;
  }
  return <SideBorders position={position} size={size} edge={edge} />;
};
Border.defaultProps = {
  position: 'top',
  size: 'sm',
  color: '#FCBF49',
};
