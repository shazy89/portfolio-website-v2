import React from 'react';
import styled, { useTheme } from 'styled-components';

const SideNavContainerDiv = styled.div`
  height: 100%;
  width: 242px;
  display: flex;
  align-items: center;
`;
const SideNavView = styled.nav`
  background-color: rgb(255 255 255 / 70%);
  height: 330px;
  width: 100%;
  text-align: center;
  position: relative;
`;
const SideNavUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  height: inherit;
  margin: 0;
  padding: 0;
  max-width: none;
`;

export const SideNavLink = styled.a`
  color: #2f2f2f;
  font-size: 25px;
  transition: all 0.1s;

  :hover {
    border-bottom: 3px solid #fcbf49;
    cursor: pointer;
  }
`;

export const SideNavContainer = ({ children }) => {
  return (
    <SideNavContainerDiv>
      <SideNavView>
        <SideNavUl>{children}</SideNavUl>
      </SideNavView>
    </SideNavContainerDiv>
  );
};
