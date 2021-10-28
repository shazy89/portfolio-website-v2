import React from 'react';
import styled, { useTheme } from 'styled-components';
import { SideNavLink as Link } from '../../../infrastructure/styled/ui/styled.side.nav';

export const SideNavLink = ({ children }) => {
  const theme = useTheme();

  return (
    <li>
      <Link className="link" to="/#">
        {' '}
        {children}
      </Link>
    </li>
  );
};
