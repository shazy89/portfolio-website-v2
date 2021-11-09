import React from 'react';
import styled from 'styled-components';
import { SideNav } from '../../layout/side nav/side.nav';
import { LogoIcon } from './LogoIcon';
import { HeaderTextPrimary } from './header.text.primary';
import { HeaderTextSecondary } from './header.text.secondary';
import { graphql, useStaticQuery } from 'gatsby';
const HeaderContainer = styled.header`
  height: 100%;
  position: relative;
  display: flex;
  padding: 1rem;
`;
const HeaderTextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoIcon />
      <SideNav />
      <HeaderTextBox>
        <HeaderTextPrimary />
        <HeaderTextSecondary />
      </HeaderTextBox>
    </HeaderContainer>
  );
};
