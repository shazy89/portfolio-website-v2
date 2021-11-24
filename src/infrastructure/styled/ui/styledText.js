import React from 'react';
import styled, { useTheme } from 'styled-components';

const TextViewH1 = styled.h1`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  font-weight: 400;
`;
const TextViewH2 = styled.h2`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  font-weight: 400;
`;
const TextViewH3 = styled.h3`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  font-weight: 400;
`;
const TextViewH4 = styled.h4`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  font-weight: 400;
`;
const TextViewP = styled.p`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  font-weight: 400;
`;

export const Text = ({ size, color, children }) => {
  const theme = useTheme();
  switch (size) {
    case 'h1':
      return (
        <TextViewH1
          size={theme.fontSizes[size]}
          color={theme.colors.text[color]}
        >
          {children}
        </TextViewH1>
      );
    case 'h2':
      return (
        <TextViewH2
          size={theme.fontSizes[size]}
          color={theme.colors.text[color]}
        >
          {children}
        </TextViewH2>
      );
    case 'h3':
      return (
        <TextViewH3
          size={theme.fontSizes[size]}
          color={theme.colors.text[color]}
        >
          {children}
        </TextViewH3>
      );
    case 'h4':
      return (
        <TextViewH4
          size={theme.fontSizes[size]}
          color={theme.colors.text[color]}
        >
          {children}
        </TextViewH4>
      );
    case 'p':
      return (
        <TextViewP
          size={theme.fontSizes[size]}
          color={theme.colors.text[color]}
        >
          {children}
        </TextViewP>
      );
    default:
      return (
        <TextViewH1
          size={theme.fontSizes[size]}
          color={theme.colors.text[color]}
        >
          {children}
        </TextViewH1>
      );
  }
};

Text.defaultProps = {
  size: 'h1',
  color: 'primary',
};
