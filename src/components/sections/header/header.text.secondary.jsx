import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Text } from '../../../infrastructure/styled/ui/styled.text';
import { Border } from '../../../infrastructure/styled/ui/styled.border';
const TextSecondaryBox = styled.div`
  padding: 1rem;
  width: 29.5rem;
  line-height: 1.4;
  position: absolute;
  top: 101px;
  right: 30px;
`;
const InformationBox = styled.div`
padding: 1rem;
  display: flex;
  align-items: center;

`
export const HeaderTextSecondary = () => {
  return (
    <TextSecondaryBox>
       <Text size="h5">- Introduction</Text>
      <InformationBox>
       <Border position="left" size="lg" edge="right"/>
        <Text size="h4">
          Web Developer and Product Designer, based in New York Metro Area .
        </Text>
      </InformationBox>
    </TextSecondaryBox>
  );
};
