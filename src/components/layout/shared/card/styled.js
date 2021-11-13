import React from 'react';
import styled, { useTheme } from 'styled-components';

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
  text-align: center;
  :hover {
    background-color: #2f2f2fd4;
  }
`;
const CardLine = styled.div`
  width: 1px;
  height: 80%;
  color: ${(props) => props.color};
  background-color: #e2e2e2;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

const CardHeader = styled.h3`
  font-size: 25px;
  margin-top: 20px;
  color: #e2e2e2;
`;
const Content = styled.p`
  font-size: 18px;
  color: #e2e2e2;
  margin-top: 20px;
`;

export const Card = ({ children, cardLine, icon: Icon, header }) => {
  const theme = useTheme();

  return (
    <CardView color={theme.colors.black.main}>
      {cardLine && <CardLine />}
      {Icon && <Icon />}
      {header && <CardHeader> {header}</CardHeader>}
      {children && <Content>{children}</Content>}
    </CardView>
  );
};

Card.defaultProps = {
  cardLine: true,
};
