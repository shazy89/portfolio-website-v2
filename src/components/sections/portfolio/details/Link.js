import React from 'react';
import styled, { useTheme } from 'styled-components';

const StyledLink = styled.li`
  margin-left: 10px;
`;
const StyledLinkTarget = styled.a`
  &:link,
  &:visited {
    font-size: 20px;
    text-decoration: none;
    padding: 5px;
    transition: all 0.2s ease-out;
    color: ${(props) => props.color};
  }
  &:hover,
  &:active {
    border-bottom: 3px solid ${(props) => props.borderColor};
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export const Link = ({ link, children }) => {
  const theme = useTheme();
  return (
    <StyledLink>
      <StyledLinkTarget
        href={link}
        target="_blank"
        rel="noreferrer"
        borderColor={theme.colors.orange.main}
        color={theme.colors.gray.light}
      >
        {children}
      </StyledLinkTarget>
    </StyledLink>
  );
};
