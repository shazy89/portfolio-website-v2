import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';

const CardView = styled.div`
  position: relative;
  padding: 10px;
  width: 340px;
  height: 490px;
  box-shadow: 10px 10px 6px #2d2d2d6b;
  background-color: ${(props) => props.color};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #2f2f2fd4;
  }
`;
const CardLine = styled.div`
  width: 1px;
  height: 80%;
  color: ${(props) => props.color};
  background-color: #707070;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

export const Card = ({ children, cardLine, icon: Icon }) => {
  const theme = useTheme();

  return (
    <CardView color={theme.colors.black.main}>
      {cardLine && <CardLine />}
      {Icon && <Icon />}
      {children}
    </CardView>
  );
};

Card.defaultProps = {
  cardLine: true,
  icon: '',
};
