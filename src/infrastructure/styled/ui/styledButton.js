import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.bgColor};
  width: ${(props) => props.size};
  color: ${(props) => props.color};
  height: auto;
  padding: 0.3rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in;
  font-size: 20px;
  :hover {
    transform: scale(1.1);
  }
`;

export const Button = ({ size, color, icon, children, bgColor }) => {
  return (
    <StyledButton size={size} bgColor={bgColor} color={color} icon={icon}>
      {children}
    </StyledButton>
  );
};
Button.defaultProps = {
  size: '148px',
  color: '#FCBF49',
  children: 'Button',
  bgColor: '#e2e2e23b',
};
