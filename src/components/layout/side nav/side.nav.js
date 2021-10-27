import React from 'react';
import styled, { useTheme } from 'styled-components';
import { SideNavContainer } from '../../../infrastructure/styled/ui/styled.side.nav';
import { SideNavLink } from './side.nav.link';

export const SideNav = () => {
  return (
    <SideNavContainer>
      <SideNavLink>Hey There</SideNavLink>
    </SideNavContainer>
  );
};
