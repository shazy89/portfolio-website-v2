import React from 'react';
import styled from 'styled-components';
import { SideNav } from '../../layout/side nav/sideNav';
import { LogoIcon } from './LogoIcon';
import { HeaderTextPrimary } from './headerTextPrimary';
import { HeaderTextSecondary } from './headerTextSecondary';
//import { graphql, useStaticQuery } from 'gatsby';
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
