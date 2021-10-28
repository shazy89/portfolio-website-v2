import styled, { useTheme } from 'styled-components';

const textColor = {
  black: '#2F2F2F',
  blue: '#73cdff',
  orange: '#FCBF49',
  gray: '#7f7f7f88',
};

const TextView = styled.h1`
  font-size: ${({ size }) => sizes[size]};
  color: ${({ color }) => textColor[color]};
  font-weight: 400;
  @media (max-width: 600px) {
    color: ${textColor['black']};
  }
`;

export const Text = ({ size, color, children }) => {
  const theme = useTheme();
  return (
    <TextView size={theme.fontSizes[size]} color={theme.colors.text[color]}>
      {children}
    </TextView>
  );
};

Text.defaultProps = {
  size: 'h4',
  color: '#E2E2E2',
};
