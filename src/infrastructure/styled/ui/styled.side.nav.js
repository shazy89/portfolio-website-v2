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
const Border = styled.div`
  border-top: 3px solid black;
  width: 50%;
`;
const BorderLeft = styled.div`
  position: absolute;
  border-left: 3px solid black;
  height: 50%;
  width: 0;
`;
export const SideNavContainer = ({ children }) => {
  return (
    <SideNavContainerDiv>
      <SideNavView>
        <Border></Border>
        <BorderLeft></BorderLeft>
        <SideNavUl>{children}</SideNavUl>
      </SideNavView>
    </SideNavContainerDiv>
  );
};
