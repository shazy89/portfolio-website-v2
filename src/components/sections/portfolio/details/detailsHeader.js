import React from 'react';
import styled from 'styled-components';

const HeaderView = styled.h1``;

export const DetailsHeader = ({ children, size, color }) => {
  return <HeaderView>{children}</HeaderView>;
};
