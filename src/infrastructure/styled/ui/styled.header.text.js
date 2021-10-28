import styled from 'styled-components';

const sizes = {
  sm: '16px',
  md: '22px',
  lg: '33px',
  xxl: '45px',
};

const textColor = {
  black: '#2F2F2F',
  blue: '#73cdff',
  orange: '#FCBF49',
  gray: '#7f7f7f88',
};

const HeadingH1View = styled.h1`
  font-size: ${({ size }) => sizes[size]};
  color: ${({ color }) => textColor[color]};
  font-weight: 400;
  @media (max-width: 600px) {
    color: ${textColor['black']};
  }
`;

export const HeadingH1 = ({ size, color, children }) => {
  return (
    <HeadingH1View size={size} color={color}>
      {children}
    </HeadingH1View>
  );
};

HeadingH1View.defaultProps = {
  size: 'lg',
  color: 'black',
};
