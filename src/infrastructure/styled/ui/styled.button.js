import React from 'react';
import styled, { useTheme } from 'styled-components';

const StyledButton = styled.button``;

export const Button = ({ size, color, icon, children }) => {
  return (
    <StyledButton size={size} color={color} icon={icon}>
      {children + icon && icon}
    </StyledButton>
  );
};
Button.defaultProps = {
  size: '148px',
  color: '#FCBF49',
  children: 'Button',
};
