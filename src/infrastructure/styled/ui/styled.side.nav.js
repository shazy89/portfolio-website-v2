import React from 'react';
import styled from 'styled-components';

const SideNavView = styled.div`
  height: 100%;
  width: 242px;
`;

const SideNav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: none;
`;

export const SideNavList = styled.li`
  color: ${({ color }) => color};
`;

export const SideNavContainer = ({ children }) => {
  return (
    <SideNavView>
      <SideNav>{children}</SideNav>
    </SideNavView>
  );
};
