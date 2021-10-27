import React from 'react';
import styled from 'styled-components';
import { SideNav } from '../../layout/side nav/side.nav';

const HeaderContainer = styled.header`
  height: 100%;
  position: relative;
  display: flex;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <SideNav />
    </HeaderContainer>
  );
};
