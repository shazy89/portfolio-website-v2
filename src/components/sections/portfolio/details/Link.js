import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.li``;
const StyledLinkTarget = styled.a`
  &:link,
  &:visited {
    font-size: 20px;
    text-decoration: none;

    padding: 1rem;
    transition: all 0.3s;
  }
`;

export const Link = ({ link, children }) => {
  return (
    <StyledLink>
      <StyledLinkTarget href={link} target="_blank" rel="noreferrer">
        {children}
      </StyledLinkTarget>
    </StyledLink>
  );
};
