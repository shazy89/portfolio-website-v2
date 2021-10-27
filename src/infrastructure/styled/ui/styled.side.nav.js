import React from 'react';
import styled, { useTheme } from 'styled-components';

const SideNavContainerDiv = styled.div`
  height: 100%;
  width: 242px;
  display: flex;
  align-items: center;
`;
const SideNavView = styled.div`
  background-color: rgb(255 255 255 / 70%);
  height: 330px;
  width: 100%;
  text-align: center;
  position: relative;
`;
const SideNavUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: none;
`;

export const SideNavList = styled.li`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
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
