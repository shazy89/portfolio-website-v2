import React from 'react';
import styled, { useTheme } from 'styled-components';
import { SideNavList } from '../../../infrastructure/styled/ui/styled.side.nav';
export const SideNavLink = ({ children }) => {
  const theme = useTheme();
  return (
    <SideNavList
      color={theme.colors.text.secondary}
      fontSize={theme.fontSizes.h5}
    >
      {children}
    </SideNavList>
  );
};
