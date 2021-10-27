import React, { useMemo } from 'react';
import styled, { useTheme } from 'styled-components';
import { SideNavContainer } from '../../../infrastructure/styled/ui/styled.side.nav';
import { SideNavLink } from './side.nav.link';
import { Border } from '../../../infrastructure/styled/ui/styled.border';
import { v4 as uuidv4 } from 'uuid';

const options = ['Resume', 'Works', 'My Story', 'Contact'];

export const SideNav = () => {
  const navOptions = useMemo(() => {
    return options.map((option) => <li key={uuidv4()}>{option}</li>);
  }, [options]);

  return (
    <SideNavContainer>
      <Border position="top" edge="left" size="md" />
      <Border position="left" edge="top" size="md" />
      <SideNavLink>Hey There</SideNavLink>
      {navOptions}
      <Border position="bottom" edge="right" size="md" />
      <Border position="right" edge="bottom" size="md" />
    </SideNavContainer>
  );
};
