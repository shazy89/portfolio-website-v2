import React from 'react';
import { Text } from '../../../infrastructure/styled/ui/styled.text';
import styled, { useTheme } from 'styled-components';
import { BorderBottom } from '../../../infrastructure/styled/ui/styled.text.border';

const TextPrimaryBox = styled.div`
  width: 50%;
  line-height: 1.4;
  position: absolute;
  bottom: 100px;
  right: 30px;
`;
const Dot = styled.span`
  color: ${({ color }) => color};
`;
export const HeaderTextPrimary = () => {
  const theme = useTheme();
  return (
    <TextPrimaryBox>
      <Text>
        <BorderBottom>E</BorderBottom>rdoan Sha<BorderBottom>z</BorderBottom>
        iman <Dot color={theme.colors.orange.main}>.</Dot>
      </Text>
    </TextPrimaryBox>
  );
};
