import React from 'react';

import { SideNavLink as Link } from '../../../infrastructure/styled/ui/styledSideNav';

export const SideNavLink = ({ children }) => {
  return (
    <li>
      <Link className="link" to="/#">
        {' '}
        {children}
      </Link>
    </li>
  );
};
